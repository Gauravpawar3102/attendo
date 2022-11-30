const { ApolloServer, gql } = require('apollo-server');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen().then(({ url }) => {
  console.log(`it running at:${url}`);
});
