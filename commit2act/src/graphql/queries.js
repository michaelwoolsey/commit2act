/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEducatorUser = /* GraphQL */ `
  query GetEducatorUser($id: ID!) {
    getEducatorUser(id: $id) {
      id
      User {
        id
        username
        email
        avatar
        type
        Actions {
          items {
            id
            date_of_action
            image
            points_received
            g_co2_saved
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      School {
        id
        name
        city
        country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OwnedGroups {
        items {
          id
          educatorUserID
          groupID
          educatorUser {
            id
            User {
              id
              username
              email
              avatar
              type
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            School {
              id
              name
              city
              country
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            OwnedGroups {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            educatorUserUserId
            educatorUserSchoolId
          }
          group {
            id
            name
            description
            image
            studentusers {
              nextToken
              startedAt
            }
            educatorusers {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      educatorUserUserId
      educatorUserSchoolId
    }
  }
`;
export const listEducatorUsers = /* GraphQL */ `
  query ListEducatorUsers(
    $filter: ModelEducatorUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducatorUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        School {
          id
          name
          city
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OwnedGroups {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        educatorUserUserId
        educatorUserSchoolId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEducatorUsers = /* GraphQL */ `
  query SyncEducatorUsers(
    $filter: ModelEducatorUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEducatorUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        School {
          id
          name
          city
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OwnedGroups {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        educatorUserUserId
        educatorUserSchoolId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      avatar
      type
      Actions {
        items {
          id
          date_of_action
          image
          points_received
          g_co2_saved
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        avatar
        type
        Actions {
          items {
            id
            date_of_action
            image
            points_received
            g_co2_saved
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        avatar
        type
        Actions {
          items {
            id
            date_of_action
            image
            points_received
            g_co2_saved
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStudentUser = /* GraphQL */ `
  query GetStudentUser($id: ID!) {
    getStudentUser(id: $id) {
      id
      User {
        id
        username
        email
        avatar
        type
        Actions {
          items {
            id
            date_of_action
            image
            points_received
            g_co2_saved
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      School {
        id
        name
        city
        country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      JoinedGroups {
        items {
          id
          studentUserID
          groupID
          studentUser {
            id
            User {
              id
              username
              email
              avatar
              type
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            School {
              id
              name
              city
              country
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            JoinedGroups {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentUserUserId
            studentUserSchoolId
          }
          group {
            id
            name
            description
            image
            studentusers {
              nextToken
              startedAt
            }
            educatorusers {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentUserUserId
      studentUserSchoolId
    }
  }
`;
export const listStudentUsers = /* GraphQL */ `
  query ListStudentUsers(
    $filter: ModelStudentUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        School {
          id
          name
          city
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        JoinedGroups {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserUserId
        studentUserSchoolId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStudentUsers = /* GraphQL */ `
  query SyncStudentUsers(
    $filter: ModelStudentUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudentUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        School {
          id
          name
          city
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        JoinedGroups {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserUserId
        studentUserSchoolId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      name
      city
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        city
        country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSchools = /* GraphQL */ `
  query SyncSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        city
        country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      description
      image
      studentusers {
        items {
          id
          studentUserID
          groupID
          studentUser {
            id
            User {
              id
              username
              email
              avatar
              type
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            School {
              id
              name
              city
              country
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            JoinedGroups {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentUserUserId
            studentUserSchoolId
          }
          group {
            id
            name
            description
            image
            studentusers {
              nextToken
              startedAt
            }
            educatorusers {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      educatorusers {
        items {
          id
          educatorUserID
          groupID
          educatorUser {
            id
            User {
              id
              username
              email
              avatar
              type
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            School {
              id
              name
              city
              country
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            OwnedGroups {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            educatorUserUserId
            educatorUserSchoolId
          }
          group {
            id
            name
            description
            image
            studentusers {
              nextToken
              startedAt
            }
            educatorusers {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        studentusers {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        educatorusers {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        image
        studentusers {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        educatorusers {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSubmittedAction = /* GraphQL */ `
  query GetSubmittedAction($id: ID!) {
    getSubmittedAction(id: $id) {
      id
      Action {
        id
        date_of_action
        image
        points_received
        g_co2_saved
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      FactBonusPointQuiz {
        id
        fact_text
        question_text
        answers
        correct_answer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        username
        email
        avatar
        type
        Actions {
          items {
            id
            date_of_action
            image
            points_received
            g_co2_saved
            userID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      submittedActionActionId
      submittedActionFactBonusPointQuizId
      submittedActionUserId
    }
  }
`;
export const listSubmittedActions = /* GraphQL */ `
  query ListSubmittedActions(
    $filter: ModelSubmittedActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmittedActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Action {
          id
          date_of_action
          image
          points_received
          g_co2_saved
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        FactBonusPointQuiz {
          id
          fact_text
          question_text
          answers
          correct_answer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        submittedActionActionId
        submittedActionFactBonusPointQuizId
        submittedActionUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubmittedActions = /* GraphQL */ `
  query SyncSubmittedActions(
    $filter: ModelSubmittedActionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubmittedActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Action {
          id
          date_of_action
          image
          points_received
          g_co2_saved
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        FactBonusPointQuiz {
          id
          fact_text
          question_text
          answers
          correct_answer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        submittedActionActionId
        submittedActionFactBonusPointQuizId
        submittedActionUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
      id
      date_of_action
      image
      points_received
      g_co2_saved
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date_of_action
        image
        points_received
        g_co2_saved
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncActions = /* GraphQL */ `
  query SyncActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date_of_action
        image
        points_received
        g_co2_saved
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFactBonusPointQuiz = /* GraphQL */ `
  query GetFactBonusPointQuiz($id: ID!) {
    getFactBonusPointQuiz(id: $id) {
      id
      fact_text
      question_text
      answers
      correct_answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFactBonusPointQuizs = /* GraphQL */ `
  query ListFactBonusPointQuizs(
    $filter: ModelFactBonusPointQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFactBonusPointQuizs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fact_text
        question_text
        answers
        correct_answer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFactBonusPointQuizs = /* GraphQL */ `
  query SyncFactBonusPointQuizs(
    $filter: ModelFactBonusPointQuizFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFactBonusPointQuizs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fact_text
        question_text
        answers
        correct_answer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEducatorUserGroup = /* GraphQL */ `
  query GetEducatorUserGroup($id: ID!) {
    getEducatorUserGroup(id: $id) {
      id
      educatorUserID
      groupID
      educatorUser {
        id
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        School {
          id
          name
          city
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OwnedGroups {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        educatorUserUserId
        educatorUserSchoolId
      }
      group {
        id
        name
        description
        image
        studentusers {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        educatorusers {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEducatorUserGroups = /* GraphQL */ `
  query ListEducatorUserGroups(
    $filter: ModelEducatorUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducatorUserGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        educatorUserID
        groupID
        educatorUser {
          id
          User {
            id
            username
            email
            avatar
            type
            Actions {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          School {
            id
            name
            city
            country
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          OwnedGroups {
            items {
              id
              educatorUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          educatorUserUserId
          educatorUserSchoolId
        }
        group {
          id
          name
          description
          image
          studentusers {
            items {
              id
              studentUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          educatorusers {
            items {
              id
              educatorUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEducatorUserGroups = /* GraphQL */ `
  query SyncEducatorUserGroups(
    $filter: ModelEducatorUserGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEducatorUserGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        educatorUserID
        groupID
        educatorUser {
          id
          User {
            id
            username
            email
            avatar
            type
            Actions {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          School {
            id
            name
            city
            country
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          OwnedGroups {
            items {
              id
              educatorUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          educatorUserUserId
          educatorUserSchoolId
        }
        group {
          id
          name
          description
          image
          studentusers {
            items {
              id
              studentUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          educatorusers {
            items {
              id
              educatorUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStudentUserGroup = /* GraphQL */ `
  query GetStudentUserGroup($id: ID!) {
    getStudentUserGroup(id: $id) {
      id
      studentUserID
      groupID
      studentUser {
        id
        User {
          id
          username
          email
          avatar
          type
          Actions {
            items {
              id
              date_of_action
              image
              points_received
              g_co2_saved
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        School {
          id
          name
          city
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        JoinedGroups {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserUserId
        studentUserSchoolId
      }
      group {
        id
        name
        description
        image
        studentusers {
          items {
            id
            studentUserID
            groupID
            studentUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentUserUserId
              studentUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        educatorusers {
          items {
            id
            educatorUserID
            groupID
            educatorUser {
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              educatorUserUserId
              educatorUserSchoolId
            }
            group {
              id
              name
              description
              image
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStudentUserGroups = /* GraphQL */ `
  query ListStudentUserGroups(
    $filter: ModelStudentUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentUserGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentUserID
        groupID
        studentUser {
          id
          User {
            id
            username
            email
            avatar
            type
            Actions {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          School {
            id
            name
            city
            country
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          JoinedGroups {
            items {
              id
              studentUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserUserId
          studentUserSchoolId
        }
        group {
          id
          name
          description
          image
          studentusers {
            items {
              id
              studentUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          educatorusers {
            items {
              id
              educatorUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStudentUserGroups = /* GraphQL */ `
  query SyncStudentUserGroups(
    $filter: ModelStudentUserGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudentUserGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        studentUserID
        groupID
        studentUser {
          id
          User {
            id
            username
            email
            avatar
            type
            Actions {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          School {
            id
            name
            city
            country
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          JoinedGroups {
            items {
              id
              studentUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserUserId
          studentUserSchoolId
        }
        group {
          id
          name
          description
          image
          studentusers {
            items {
              id
              studentUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          educatorusers {
            items {
              id
              educatorUserID
              groupID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
