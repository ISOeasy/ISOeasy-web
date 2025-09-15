# GraphQL Codegen Setup

This project has been configured with GraphQL Code Generator and Apollo Client for type-safe GraphQL operations.

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

### 2. CORS Proxy Configuration

This project includes a CORS proxy setup to avoid cross-origin issues. The GraphQL endpoint is proxied through `/api/graphql` on the same port as your Next.js application.

**Configuration:**
- **Frontend URL**: `http://localhost:3000/api/graphql` (proxied)
- **Backend URL**: `http://localhost:4000/graphql` (actual GraphQL server)
- **Apollo Client**: Configured to use `/api/graphql` (no CORS issues)

### 3. Configure GraphQL Endpoint

The GraphQL endpoint is automatically loaded from your environment variables. The configuration will look for:
1. `.env.local` (highest priority)
2. `.env` (fallback)

Create a `.env.local` file with your GraphQL endpoint:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-actual-graphql-endpoint.com/graphql
```

### 3. Generate Types

Run the codegen command to generate TypeScript types:

```bash
npm run codegen
```

For development with auto-regeneration:

```bash
npm run codegen:watch
```

### 4. Integrate Apollo Provider

Wrap your app with the Apollo Provider in your `src/app/layout.js`:

```jsx
import ApolloProvider from '../components/ApolloProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
```

### 5. Using Generated Hooks

After running codegen, you can use the generated hooks in your components:

```jsx
import { useGetUsersQuery } from '../generated/graphql';

function UsersList() {
  const { data, loading, error } = useGetUsersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## File Structure

- `codegen.ts` - GraphQL Code Generator TypeScript configuration
- `src/lib/apollo-client.js` - Apollo Client configuration
- `src/components/ApolloProvider.jsx` - Apollo Provider component
- `src/graphql/queries.graphql` - GraphQL queries
- `src/graphql/mutations.graphql` - GraphQL mutations
- `src/generated/graphql.tsx` - Generated TypeScript types and React hooks (created after running codegen)
- `src/generated/schema.json` - Generated GraphQL schema introspection (created after running codegen)

## Available Scripts

- `npm run codegen` - Generate types once
- `npm run codegen:watch` - Generate types and watch for changes

## ✅ Setup Complete!

The GraphQL Code Generator has been successfully configured and executed. The following files have been generated:

- `src/generated/graphql.tsx` - Contains TypeScript types and React hooks
- `src/generated/schema.json` - Contains GraphQL schema introspection

## Next Steps

1. Replace the example queries and mutations in `src/graphql/*.graphql` with your actual GraphQL operations
2. Set your GraphQL endpoint in `.env.local`
3. Run `npm run codegen` to regenerate types when you make changes
4. Start using the generated hooks in your components

## Benefits of Using .graphql Files

- **Better syntax highlighting** in your IDE
- **No need to import gql** from Apollo Client
- **Cleaner separation** of GraphQL operations from JavaScript/TypeScript code
- **Better tooling support** for GraphQL operations
- **Easier to maintain** and version control

## Benefits of TypeScript Configuration

- **Type safety** for configuration options
- **Environment variable support** with dotenv
- **Better IDE support** with autocomplete and error checking
- **Dynamic configuration** based on environment
- **Easier to maintain** and extend
