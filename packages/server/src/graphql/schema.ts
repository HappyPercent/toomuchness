import { buildSchema } from 'graphql/utilities';
import fs from 'node:fs';
import path from 'node:path';

const schemaString = fs.readFileSync(path.resolve(__dirname, './schema.graphql'), 'utf8');

const schema = buildSchema(schemaString);

export default schema;
