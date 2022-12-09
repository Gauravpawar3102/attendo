const { ApolloServer, gql } = require('apollo-server');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { Teacher } = require('./resolvers/Teacher');
const { typeDefs } = require('./schema');
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    // Teacher,
  },
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`it running at:${url}`);
});
