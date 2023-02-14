import {GraphQLError} from 'graphql';
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {readFileSync} from 'fs';
import {authSign, authVerify} from "./modules/auth/auth.js";
import {resolvers} from "./schema/resolvers.js";

const typeDefs = readFileSync('./src/schema.graphql', {encoding: 'utf-8'});

interface MyContext {
    token?: String;
}

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
});

const {url} = await startStandaloneServer(server, {
    context: async ({req}) => {
        const token = req.headers.authorization || '';
        const user = authVerify(token);
        if (!user)
            throw new GraphQLError('User is not authenticated', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                    http: {status: 401},
                },
            });
        return {user};
    },
    listen: {port: 4000}
});

console.log(`🚀 Server listening at: ${url}`);
