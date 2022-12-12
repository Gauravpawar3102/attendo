const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  # Mutations
  type Mutation {
    teacherCreate(
      name: String!
      email: String!
      password: String!
    ): TeacherPayLoad

    classCreate(name: String!, teacherId: Int!): ClassPayLoad

    studentCreate(
      name: String!
      classId: Int!
      email: String!
      rollnumber: Int!
      status: Boolean!
    ): StudentPayLoad
  }
  # ?Query
  type Query {
    books: [Book!]!
    teacherData: [Teacher!]!
    teacher(name: String!): Teacher
    student(rollnumber: Int): Student
    classes: [Class!]!
    students: [Student!]!
    # teacher(userId: ID!): Teacher
  }
  # Types
  type Teacher {
    id: ID!
    email: String!
    name: String!
    className: String!

    classes: [Class!]! #create class name
  }

  type Class {
    id: ID!
    name: String!
    teacherId: Int!
    students: [Student]
  }
  type Student {
    id: ID!
    name: String!
    email: String!
    status: Boolean!
    date: Int
    rollnumber: Int
    classes: [Class!]!
  }
  type UserErrors {
    message: String!
  }

  type TeacherPayLoad {
    userErrors: [UserErrors!]!
    teacher: Teacher
  }
  type ClassPayLoad {
    userErrors: [UserErrors!]!
    class: Class
  }
  type StudentPayLoad {
    userErrors: [UserErrors!]!
    studentData: Student
  }
`;

module.exports = { typeDefs };
