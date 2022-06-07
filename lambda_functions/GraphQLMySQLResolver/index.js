const mysql = require('mysql');
let dbInit = false;

async function conditionallyCreateDB(connection) {
  // if the database has not yet been made, make it
  // otherwise, this throws an error, which is caught in the handler and
  // the lambda handler function proceeds as usual
  const createDBSQL = `
  CREATE TABLE \`User\` (
    \`user_id\` int PRIMARY KEY AUTO_INCREMENT,
    \`username\` varchar(50) NOT NULL,
    \`name\` text NOT NULL,
    \`email\` varchar(50) UNIQUE NOT NULL,
    \`avatar\` text,
    UNIQUE INDEX (email)
  );
  CREATE TABLE \`Role\` (
    \`user_id\` int PRIMARY KEY,
    \`role\` ENUM ('student', 'educator', 'administrator', 'user') NOT NULL
  );
  CREATE TABLE \`Action\` (
    \`action_id\` int PRIMARY KEY AUTO_INCREMENT,
    \`action_name\` varchar(255) NOT NULL UNIQUE COMMENT 'ex. "Transportation"',
    \`page_media\` text COMMENT 'points to s3 bucket where it is stored',
    \`action_icon\` text COMMENT 's3 bucket png/jpg image',
    \`fallback_quiz_media\` text COMMENT 'points to s3 bucket where it is stored',
    \`is_hidden\` bool default false
  );
  CREATE TABLE \`ActionItem\` (
    \`action_id\` int NOT NULL,
    \`item_name\` varchar(255) NOT NULL COMMENT 'ex. ["Distance walked (km)", "Distance biked (km)", "Distance transited (km)"] ',
    \`item_description\` text NOT NULL COMMENT 'ex. ["How far you walked", "How far you cycled", "How far you took public transit"]',
    \`co2_saved_per_unit\` float8 NOT NULL COMMENT 'ex, [180.0, 180.0, 100.0]',
    PRIMARY KEY ( \`item_name\`, \`action_id\`)
  );
  CREATE TABLE \`ActionQuiz\` (
    \`quiz_id\` int PRIMARY KEY AUTO_INCREMENT,
    \`fact_text\` text NOT NULL,
    \`question_text\` text NOT NULL,
    \`action_id\` int NOT NULL
  );
  CREATE TABLE \`ActionQuizAnswer\` (
    \`quiz_id\` int NOT NULL,
    \`answer\` varchar(255) NOT NULL COMMENT 'this should be an index?',
    \`is_correct_answer\` bool NOT NULL,
    PRIMARY KEY (\`quiz_id\`, \`answer\`)
  );
  CREATE TABLE \`ActionValidationLabel\` (
    \`action_id\` int,
    \`validation_label\` varchar(255),
    PRIMARY KEY (\`action_id\`, \`validation_label\`)
  );
  CREATE TABLE \`SubmittedAction\` (
    \`sa_id\` int PRIMARY KEY AUTO_INCREMENT,
    \`user_id\` int NOT NULL COMMENT 'index on this',
    \`action_id\` int NOT NULL,
    \`quiz_id\` int,
    \`g_co2_saved\` float NOT NULL,
    \`date_of_action\` date NOT NULL,
    \`time_submitted\` datetime,
    \`first_quiz_answer_correct\` boolean NOT NULL,
    \`quiz_answered\` boolean NOT NULL,
    \`is_validated\` boolean NOT NULL,
    \`points_earned\` int DEFAULT 0,
    \`is_rejected\` bool default false,
    \`is_image_explicit\` bool default false,
    \`submitted_image\` text
  );
  CREATE TABLE \`SubmittedActionItem\` (
      \`item_name\` varchar(255),
      \`sa_id\` int,
      \`input_value\` float8,
      PRIMARY KEY (\`item_name\`, \`sa_id\`)
  );
  CREATE TABLE \`Group\` (
    \`group_id\` int PRIMARY KEY AUTO_INCREMENT,
    \`group_name\` varchar(255) NOT NULL UNIQUE,
    \`group_description\` text,
    \`group_image\` text,
    \`is_public\` boolean DEFAULT true,
    \`private_password\` text DEFAULT null
  );
  CREATE TABLE \`GroupUser\` (
    \`group_id\` int,
    \`user_id\` int COMMENT 'only educator and administrator roles can own/make a group',
    \`user_role\` ENUM ('owner', 'member') NOT NULL,
    PRIMARY KEY (\`group_id\`, \`user_id\`)
  );
  ALTER TABLE \`Role\` ADD FOREIGN KEY (\`user_id\`) REFERENCES \`User\` (\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE;
  ALTER TABLE \`ActionItem\` ADD FOREIGN KEY (\`action_id\`) REFERENCES \`Action\` (\`action_id\`) ON DELETE CASCADE ON UPDATE
  CASCADE;
  ALTER TABLE \`ActionQuiz\` ADD FOREIGN KEY (\`action_id\`) REFERENCES \`Action\` (\`action_id\`) ON DELETE CASCADE ON UPDATE
  CASCADE;
  ALTER TABLE \`ActionQuizAnswer\` ADD FOREIGN KEY (\`quiz_id\`) REFERENCES \`ActionQuiz\` (\`quiz_id\`) ON DELETE CASCADE;
  ALTER TABLE \`SubmittedAction\` ADD FOREIGN KEY (\`user_id\`) REFERENCES \`User\` (\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE;
  ALTER TABLE \`SubmittedAction\` ADD FOREIGN KEY (\`action_id\`) REFERENCES \`Action\` (\`action_id\`) ON DELETE CASCADE ON UPDATE CASCADE;
  ALTER TABLE \`SubmittedAction\` ADD FOREIGN KEY (\`quiz_id\`) REFERENCES \`ActionQuiz\` (\`quiz_id\`) ON DELETE SET NULL ON UPDATE CASCADE;
  ALTER TABLE \`GroupUser\` ADD FOREIGN KEY (\`group_id\`) REFERENCES \`Group\` (\`group_id\`) ON DELETE CASCADE ON UPDATE CASCADE;
  ALTER TABLE \`GroupUser\` ADD FOREIGN KEY (\`user_id\`) REFERENCES \`User\` (\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE;
  ALTER TABLE \`SubmittedActionItem\` ADD FOREIGN KEY (\`sa_id\`) REFERENCES \`SubmittedAction\` (\`sa_id\`) ON DELETE CASCADE
  ON UPDATE CASCADE;
  ALTER TABLE \`SubmittedActionItem\` ADD FOREIGN KEY (\`item_name\`) REFERENCES \`ActionItem\` (\`item_name\`) ON DELETE CASCADE ON UPDATE CASCADE;
  ALTER TABLE \`ActionValidationLabel\` ADD FOREIGN KEY (\`action_id\`) REFERENCES \`Action\` (\`action_id\`) ON DELETE CASCADE ON UPDATE CASCADE;
  `;
  return executeSQL(connection, createDBSQL);
}

function executeSQL(connection, sql) {
  // executes an sql statement as a promise, with included error handling
  return new Promise((resolve,reject) => {
    console.log('Executing SQL:', sql);
    connection.query(sql, (err, data) => { // if error, gets saved in `err`, else response from DB saved in `data`
      if(err) {
        return reject(err);
      }
      return resolve(data);
    } );
  });
}

function populateAndSanitizeSQL(sql, variableMapping, connection) {
  // takes the variable mapping JSON, and inserts them into the sql string
  // for each pair in variableMapping, replace the key with value in sql
  Object.entries(variableMapping).forEach(([key, value]) => {
    let escapedValue = connection.escape(value);
    if (String(escapedValue).length == 0 || escapedValue == "''" || escapedValue === "''" || escapedValue.charAt(0) == "$" || escapedValue.charAt(1) == "$") {
      // if in the GraphQL request, a user does not pass in the value of a variable required in the statement, set the variable to null
      escapedValue = null;
    }
    sql = sql.replace(key, escapedValue);
  });

  return sql;
}


let connection;
connection = mysql.createPool({
  host     : process.env.RDSPROXY_ENDPOINT,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  database : process.env.DBNAME
});


// Load the AWS SDK
var AWS = require('aws-sdk'),  // to change
    region = "ca-central-1",
    secretName = "commit2actRDS",//"arn:aws:secretsmanager:ca-central-1:016942909762:secret:commit2actDB-OBJdoN",
    secret,
    decodedBinarySecret;

// Create a Secrets Manager client
var client = new AWS.SecretsManager({
    region: region
});

exports.handler = async (event) => {
  // cache the secret
    // if(!secret){
    //     console.log('getting secret from secret manager')
    //     // get secret string from secret manager
    //     const secretValue = await client.getSecretValue({ SecretId: "arn:aws:secretsmanager:ca-central-1:016942909762:secret:commit2actDB-OBJdoN" }).promise();
    //     secret = JSON.parse(secretValue.SecretString);
    // }

  
  // called whenever a GraphQL event is recieved
  console.log(secret, decodedBinarySecret);
  console.log('Received event', JSON.stringify(event, null, 3));

  let result;
  if (!dbInit) {
    try{
      await conditionallyCreateDB(connection);
    } catch (error) {
      console.log('The database has already been made, proceeding with the GQL request')
    }
    dbInit = true;
  }
  
  if (event.items) { 
    // for queries and mutations where there are >=1 possible statements to execute
    // events.items is a JSON object
    let counter;
    
    for (const item of event.items) {
      let variableMapping;
      if (! event.variableMapping ) {
        variableMapping = {};
      }
      else {
        variableMapping = event.variableMapping;
      }
      var keyMapping = {};
      counter = 1;
      let formattedNumber;
      Object.keys(item).forEach(function(key) {
        formattedNumber = ("0" + counter).slice(-2);
        keyMapping[":K" + formattedNumber] = key;
        variableMapping[":V" + formattedNumber] = item[key];
        counter ++;
      });
      
      var sqlStatement = event.sql;
      
      counter = 1;
      Object.keys(keyMapping).forEach(function(key) { 
        // keys look like ":K01"
        // replace instances of ":K##" in our sql statement with corresponding value
        formattedNumber = ("0" + counter).slice(-2);
        sqlStatement = sqlStatement.replace(":K" + formattedNumber, keyMapping[key]);
        counter ++;
      });
      
      let inputSQL = populateAndSanitizeSQL(sqlStatement, variableMapping, connection);
      
      result = await executeSQL(connection, inputSQL);
    }
  }
  
  else {
    let sql_statements = event.sql.split(";"); // splits up multiple SQL statements into an array
    for (let sql_statement of sql_statements) { // iterate through the SQL statements
      if (sql_statement.length < 3) { // sometimes an empty statement will try to be executed, this stops those from executing
        continue;
      }
      // 'fill in' the variables in the sql statement with ones from variableMapping
      const inputSQL = populateAndSanitizeSQL(sql_statement, event.variableMapping, connection);
      // execute the sql statement on our database
      result = await executeSQL(connection, inputSQL);
    }
  }
  
  // for secondary SQL statement to execute, like a SELECT after an INSERT
  if (event.responseSQL) { 
    const responseSQL =
      populateAndSanitizeSQL(event.responseSQL, event.variableMapping, connection);
    result = await executeSQL(connection, responseSQL);
  }
  
  // connection.end(function(error, results) {
  //   // The connection is terminated now 
  //   console.log("Connection ended");
  // });
  
  return result;
};
