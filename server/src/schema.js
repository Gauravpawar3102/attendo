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
      className: String!
    ): TeacherPayLoad
  }
  # input

  # ?Query
  type Query {
    books: [Book!]!
    teacherData: [Teacher!]!
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
    teacher: String!
    students: [Student!]!
  }
  type Student {
    id: ID!
    name: String!
    email: String!
    status: Boolean!
    date: Int
    classes: [Class!]!
  }
  type UserErrors {
    message: String!
  }

  type TeacherPayLoad {
    userErrors: [UserErrors!]!
    teacher: Teacher
  }
`;

module.exports = { typeDefs };
