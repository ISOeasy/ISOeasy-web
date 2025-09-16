import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Build = {
  __typename?: 'Build';
  appName: Scalars['String']['output'];
  changelog?: Maybe<Scalars['String']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fileName: Scalars['String']['output'];
  filePath: Scalars['String']['output'];
  fileSize?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  platform: Platform;
  releaseNotes: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['String']['output'];
};

export type BuildConnection = {
  __typename?: 'BuildConnection';
  builds: Array<Build>;
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type BuildNotificationInput = {
  changelog: Scalars['String']['input'];
  versionCode: Scalars['String']['input'];
};

export type Company = {
  __typename?: 'Company';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<Array<User>>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  companies: Array<Company>;
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CreateBuildInput = {
  appName: Scalars['String']['input'];
  changelog?: InputMaybe<Scalars['String']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  fileName: Scalars['String']['input'];
  filePath: Scalars['String']['input'];
  fileSize?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  platform: Platform;
  releaseNotes: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFeedbackInput = {
  description: Scalars['String']['input'];
  files?: InputMaybe<Array<FeedbackFileInput>>;
  subject: Scalars['String']['input'];
};

export type CreateUserInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['String']['input']>;
  role: Role;
  status: Scalars['String']['input'];
};

export type Feedback = {
  __typename?: 'Feedback';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  files?: Maybe<Array<FeedbackFile>>;
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type FeedbackConnection = {
  __typename?: 'FeedbackConnection';
  currentPage: Scalars['Int']['output'];
  feedbacks: Array<Feedback>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type FeedbackFile = {
  __typename?: 'FeedbackFile';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  feedback: Feedback;
  feedbackId: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
};

export type FeedbackFileInput = {
  base64Data: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type GenerateSignedUrlInput = {
  buildId: Scalars['ID']['input'];
  expirationMinutes?: InputMaybe<Scalars['Int']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptPrivacyPolicy: User;
  changePassword: Scalars['Boolean']['output'];
  createBuild: Build;
  createCompany: Company;
  createFeedback: Feedback;
  createUser: User;
  deleteBuild: Scalars['Boolean']['output'];
  deleteCompany: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  echo?: Maybe<Scalars['String']['output']>;
  forgotPassword: Scalars['Boolean']['output'];
  generateSignedUrl: SignedUrlResponse;
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  resetUserPassword: Scalars['Boolean']['output'];
  sendBuildNotification: Scalars['Boolean']['output'];
  signup: AuthResponse;
  updateBuild: Build;
  updateCompany: Company;
  updateUser: User;
  uploadFeedbackFiles: Array<FeedbackFile>;
  uploadProfileImage: User;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationCreateBuildArgs = {
  input: CreateBuildInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteBuildArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEchoArgs = {
  message: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationGenerateSignedUrlArgs = {
  input: GenerateSignedUrlInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResetUserPasswordArgs = {
  id: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationSendBuildNotificationArgs = {
  input: BuildNotificationInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUpdateBuildArgs = {
  id: Scalars['ID']['input'];
  input: UpdateBuildInput;
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCompanyInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationUploadFeedbackFilesArgs = {
  feedbackId: Scalars['ID']['input'];
  files: Array<FeedbackFileInput>;
};


export type MutationUploadProfileImageArgs = {
  file: Scalars['Upload']['input'];
};

export enum Platform {
  Android = 'ANDROID',
  Ios = 'IOS',
  Linux = 'LINUX',
  Macos = 'MACOS',
  Windows = 'WINDOWS'
}

export type Query = {
  __typename?: 'Query';
  build: Build;
  builds: BuildConnection;
  buildsByApp: BuildConnection;
  buildsByPlatform: BuildConnection;
  companies: CompanyConnection;
  company: Company;
  companyByName?: Maybe<Company>;
  echo?: Maybe<Scalars['String']['output']>;
  feedback: Feedback;
  feedbacks: FeedbackConnection;
  latestBuilds: Array<Build>;
  me: User;
  myFeedbacks: Array<Feedback>;
  user: User;
  users: UserConnection;
};


export type QueryBuildArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBuildsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  platform?: InputMaybe<Platform>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBuildsByAppArgs = {
  appName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBuildsByPlatformArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  platform: Platform;
};


export type QueryCompaniesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryEchoArgs = {
  message: Scalars['String']['input'];
};


export type QueryFeedbackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeedbacksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLatestBuildsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  platform?: InputMaybe<Platform>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Role>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type SignedUrlResponse = {
  __typename?: 'SignedUrlResponse';
  buildId: Scalars['ID']['output'];
  expiresAt: Scalars['DateTime']['output'];
  signedUrl: Scalars['String']['output'];
};

export type SignupInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateBuildInput = {
  appName?: InputMaybe<Scalars['String']['input']>;
  changelog?: InputMaybe<Scalars['String']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  platform?: InputMaybe<Platform>;
  releaseNotes?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedbackInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  feedbacks?: Maybe<Array<Feedback>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  privacyPolicyAccepted: Scalars['Boolean']['output'];
  profileImage?: Maybe<Scalars['String']['output']>;
  role: Role;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
  users: Array<User>;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, createdAt?: string | null } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, name: string, email: string, updatedAt?: string | null } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type CreateBuildMutationVariables = Exact<{
  input: CreateBuildInput;
}>;


export type CreateBuildMutation = { __typename?: 'Mutation', createBuild: { __typename?: 'Build', id: string, createdAt?: string | null } };

export type GenerateSignedUrlMutationVariables = Exact<{
  input: GenerateSignedUrlInput;
}>;


export type GenerateSignedUrlMutation = { __typename?: 'Mutation', generateSignedUrl: { __typename?: 'SignedUrlResponse', signedUrl: string, expiresAt: string, buildId: string } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number } };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, role: Role } };

export type GetBuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBuildsQuery = { __typename?: 'Query', builds: { __typename?: 'BuildConnection', totalCount: number } };

export type GetBuildsByPlatformQueryVariables = Exact<{
  platform: Platform;
}>;


export type GetBuildsByPlatformQuery = { __typename?: 'Query', buildsByPlatform: { __typename?: 'BuildConnection', totalCount: number, builds: Array<{ __typename?: 'Build', id: string, appName: string, version: string, platform: Platform, filePath: string, fileName: string, fileSize?: number | null, checksum?: string | null, changelog?: string | null, createdAt?: string | null, metadata?: any | null }> } };


export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    createdAt
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateBuildDocument = gql`
    mutation CreateBuild($input: CreateBuildInput!) {
  createBuild(input: $input) {
    id
    createdAt
  }
}
    `;
export type CreateBuildMutationFn = Apollo.MutationFunction<CreateBuildMutation, CreateBuildMutationVariables>;

/**
 * __useCreateBuildMutation__
 *
 * To run a mutation, you first call `useCreateBuildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBuildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBuildMutation, { data, loading, error }] = useCreateBuildMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBuildMutation(baseOptions?: Apollo.MutationHookOptions<CreateBuildMutation, CreateBuildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBuildMutation, CreateBuildMutationVariables>(CreateBuildDocument, options);
      }
export type CreateBuildMutationHookResult = ReturnType<typeof useCreateBuildMutation>;
export type CreateBuildMutationResult = Apollo.MutationResult<CreateBuildMutation>;
export type CreateBuildMutationOptions = Apollo.BaseMutationOptions<CreateBuildMutation, CreateBuildMutationVariables>;
export const GenerateSignedUrlDocument = gql`
    mutation GenerateSignedUrl($input: GenerateSignedUrlInput!) {
  generateSignedUrl(input: $input) {
    signedUrl
    expiresAt
    buildId
  }
}
    `;
export type GenerateSignedUrlMutationFn = Apollo.MutationFunction<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>;

/**
 * __useGenerateSignedUrlMutation__
 *
 * To run a mutation, you first call `useGenerateSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSignedUrlMutation, { data, loading, error }] = useGenerateSignedUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateSignedUrlMutation(baseOptions?: Apollo.MutationHookOptions<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>(GenerateSignedUrlDocument, options);
      }
export type GenerateSignedUrlMutationHookResult = ReturnType<typeof useGenerateSignedUrlMutation>;
export type GenerateSignedUrlMutationResult = Apollo.MutationResult<GenerateSignedUrlMutation>;
export type GenerateSignedUrlMutationOptions = Apollo.BaseMutationOptions<GenerateSignedUrlMutation, GenerateSignedUrlMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    totalCount
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: ID!) {
  user(id: $id) {
    id
    name
    email
    role
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetBuildsDocument = gql`
    query GetBuilds {
  builds {
    totalCount
  }
}
    `;

/**
 * __useGetBuildsQuery__
 *
 * To run a query within a React component, call `useGetBuildsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuildsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuildsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBuildsQuery(baseOptions?: Apollo.QueryHookOptions<GetBuildsQuery, GetBuildsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBuildsQuery, GetBuildsQueryVariables>(GetBuildsDocument, options);
      }
export function useGetBuildsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBuildsQuery, GetBuildsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBuildsQuery, GetBuildsQueryVariables>(GetBuildsDocument, options);
        }
export function useGetBuildsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBuildsQuery, GetBuildsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBuildsQuery, GetBuildsQueryVariables>(GetBuildsDocument, options);
        }
export type GetBuildsQueryHookResult = ReturnType<typeof useGetBuildsQuery>;
export type GetBuildsLazyQueryHookResult = ReturnType<typeof useGetBuildsLazyQuery>;
export type GetBuildsSuspenseQueryHookResult = ReturnType<typeof useGetBuildsSuspenseQuery>;
export type GetBuildsQueryResult = Apollo.QueryResult<GetBuildsQuery, GetBuildsQueryVariables>;
export const GetBuildsByPlatformDocument = gql`
    query GetBuildsByPlatform($platform: Platform!) {
  buildsByPlatform(platform: $platform) {
    builds {
      id
      appName
      version
      platform
      filePath
      fileName
      fileSize
      checksum
      changelog
      createdAt
      metadata
    }
    totalCount
  }
}
    `;

/**
 * __useGetBuildsByPlatformQuery__
 *
 * To run a query within a React component, call `useGetBuildsByPlatformQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuildsByPlatformQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuildsByPlatformQuery({
 *   variables: {
 *      platform: // value for 'platform'
 *   },
 * });
 */
export function useGetBuildsByPlatformQuery(baseOptions: Apollo.QueryHookOptions<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables> & ({ variables: GetBuildsByPlatformQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables>(GetBuildsByPlatformDocument, options);
      }
export function useGetBuildsByPlatformLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables>(GetBuildsByPlatformDocument, options);
        }
export function useGetBuildsByPlatformSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables>(GetBuildsByPlatformDocument, options);
        }
export type GetBuildsByPlatformQueryHookResult = ReturnType<typeof useGetBuildsByPlatformQuery>;
export type GetBuildsByPlatformLazyQueryHookResult = ReturnType<typeof useGetBuildsByPlatformLazyQuery>;
export type GetBuildsByPlatformSuspenseQueryHookResult = ReturnType<typeof useGetBuildsByPlatformSuspenseQuery>;
export type GetBuildsByPlatformQueryResult = Apollo.QueryResult<GetBuildsByPlatformQuery, GetBuildsByPlatformQueryVariables>;