import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
    path: path.resolve(__dirname, '../.env'),
});

import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './graphql/schema';
import root from './graphql/root';

const app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: process.env.NODE_ENV === 'development',
    })
);
app.listen(process.env.APP_PORT);
console.log(`Running a GraphQL API server at http://localhost:${process.env.APP_PORT}/graphql`);
