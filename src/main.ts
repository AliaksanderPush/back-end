import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
const PORT = process.env.PORT || 4000;

server.listen({PORT}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});