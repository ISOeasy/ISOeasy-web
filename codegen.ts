import dotenv from 'dotenv';
import { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config();

const SCHEMA_URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';

console.log('Using GraphQL URL:', SCHEMA_URL);

const config: CodegenConfig = {
    schema: {
        [SCHEMA_URL]: {
            headers: {
                'Content-Type': 'application/json',
                'apollo-require-preflight': 'true',
            },
        },
    },
    documents: ['src/graphql/**/*.graphql'],
    generates: {
        './src/generated/graphql.tsx': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true,
                withComponent: false,
                withHOC: false,
                skipTypename: false,
                dedupeFragments: true,
                preResolveTypes: true,
                scalars: {
                    ID: 'string',
                    DateTime: 'string',
                    JSON: 'any',
                },
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
