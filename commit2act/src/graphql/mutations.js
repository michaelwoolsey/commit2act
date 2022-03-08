/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEducatorUser = /* GraphQL */ `
  mutation CreateEducatorUser(
    $input: CreateEducatorUserInput!
    $condition: ModelEducatorUserConditionInput
  ) {
    createEducatorUser(input: $input, condition: $condition) {
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
export const updateEducatorUser = /* GraphQL */ `
  mutation UpdateEducatorUser(
    $input: UpdateEducatorUserInput!
    $condition: ModelEducatorUserConditionInput
  ) {
    updateEducatorUser(input: $input, condition: $condition) {
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
export const deleteEducatorUser = /* GraphQL */ `
  mutation DeleteEducatorUser(
    $input: DeleteEducatorUserInput!
    $condition: ModelEducatorUserConditionInput
  ) {
    deleteEducatorUser(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createStudentUser = /* GraphQL */ `
  mutation CreateStudentUser(
    $input: CreateStudentUserInput!
    $condition: ModelStudentUserConditionInput
  ) {
    createStudentUser(input: $input, condition: $condition) {
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
export const updateStudentUser = /* GraphQL */ `
  mutation UpdateStudentUser(
    $input: UpdateStudentUserInput!
    $condition: ModelStudentUserConditionInput
  ) {
    updateStudentUser(input: $input, condition: $condition) {
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
export const deleteStudentUser = /* GraphQL */ `
  mutation DeleteStudentUser(
    $input: DeleteStudentUserInput!
    $condition: ModelStudentUserConditionInput
  ) {
    deleteStudentUser(input: $input, condition: $condition) {
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
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
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
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
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
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createSubmittedAction = /* GraphQL */ `
  mutation CreateSubmittedAction(
    $input: CreateSubmittedActionInput!
    $condition: ModelSubmittedActionConditionInput
  ) {
    createSubmittedAction(input: $input, condition: $condition) {
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
export const updateSubmittedAction = /* GraphQL */ `
  mutation UpdateSubmittedAction(
    $input: UpdateSubmittedActionInput!
    $condition: ModelSubmittedActionConditionInput
  ) {
    updateSubmittedAction(input: $input, condition: $condition) {
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
export const deleteSubmittedAction = /* GraphQL */ `
  mutation DeleteSubmittedAction(
    $input: DeleteSubmittedActionInput!
    $condition: ModelSubmittedActionConditionInput
  ) {
    deleteSubmittedAction(input: $input, condition: $condition) {
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
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
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
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
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
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
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
export const createFactBonusPointQuiz = /* GraphQL */ `
  mutation CreateFactBonusPointQuiz(
    $input: CreateFactBonusPointQuizInput!
    $condition: ModelFactBonusPointQuizConditionInput
  ) {
    createFactBonusPointQuiz(input: $input, condition: $condition) {
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
export const updateFactBonusPointQuiz = /* GraphQL */ `
  mutation UpdateFactBonusPointQuiz(
    $input: UpdateFactBonusPointQuizInput!
    $condition: ModelFactBonusPointQuizConditionInput
  ) {
    updateFactBonusPointQuiz(input: $input, condition: $condition) {
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
export const deleteFactBonusPointQuiz = /* GraphQL */ `
  mutation DeleteFactBonusPointQuiz(
    $input: DeleteFactBonusPointQuizInput!
    $condition: ModelFactBonusPointQuizConditionInput
  ) {
    deleteFactBonusPointQuiz(input: $input, condition: $condition) {
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
export const createEducatorUserGroup = /* GraphQL */ `
  mutation CreateEducatorUserGroup(
    $input: CreateEducatorUserGroupInput!
    $condition: ModelEducatorUserGroupConditionInput
  ) {
    createEducatorUserGroup(input: $input, condition: $condition) {
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
export const updateEducatorUserGroup = /* GraphQL */ `
  mutation UpdateEducatorUserGroup(
    $input: UpdateEducatorUserGroupInput!
    $condition: ModelEducatorUserGroupConditionInput
  ) {
    updateEducatorUserGroup(input: $input, condition: $condition) {
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
export const deleteEducatorUserGroup = /* GraphQL */ `
  mutation DeleteEducatorUserGroup(
    $input: DeleteEducatorUserGroupInput!
    $condition: ModelEducatorUserGroupConditionInput
  ) {
    deleteEducatorUserGroup(input: $input, condition: $condition) {
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
export const createStudentUserGroup = /* GraphQL */ `
  mutation CreateStudentUserGroup(
    $input: CreateStudentUserGroupInput!
    $condition: ModelStudentUserGroupConditionInput
  ) {
    createStudentUserGroup(input: $input, condition: $condition) {
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
export const updateStudentUserGroup = /* GraphQL */ `
  mutation UpdateStudentUserGroup(
    $input: UpdateStudentUserGroupInput!
    $condition: ModelStudentUserGroupConditionInput
  ) {
    updateStudentUserGroup(input: $input, condition: $condition) {
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
export const deleteStudentUserGroup = /* GraphQL */ `
  mutation DeleteStudentUserGroup(
    $input: DeleteStudentUserGroupInput!
    $condition: ModelStudentUserGroupConditionInput
  ) {
    deleteStudentUserGroup(input: $input, condition: $condition) {
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
