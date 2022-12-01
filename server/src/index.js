const { ApolloServer, gql } = require('apollo-server');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { typeDefs } = require('./schema');
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`it running at:${url}`);
});
