import * as Types from '../lib/gqlTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StoryDataFragment = { __typename?: 'story_story', id: any, title: string, created_at: any, updated_at: any, author: { __typename?: 'user_user', id: any, first_name: string, last_name: string } };

export type StorySearchResultFragment = { __typename?: 'story_story', id: any, title: string, created_at: any, updated_at: any, blocks: Array<{ __typename?: 'story_block', id: any, type: Types.Story_Enum_Block_Type_Enum, data: any, seq: number }>, author: { __typename?: 'user_user', id: any, first_name: string, last_name: string } };

export type GetStoriesBySearchQueryVariables = Types.Exact<{
  search_string?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetStoriesBySearchQuery = { __typename?: 'query_root', story_story: Array<{ __typename?: 'story_story', id: any, title: string, created_at: any, updated_at: any, blocks: Array<{ __typename?: 'story_block', id: any, type: Types.Story_Enum_Block_Type_Enum, data: any, seq: number }>, author: { __typename?: 'user_user', id: any, first_name: string, last_name: string } }> };

export type StoryResultFragment = { __typename?: 'story_story', id: any, title: string, created_at: any, updated_at: any, blocks: Array<{ __typename?: 'story_block', id: any, type: Types.Story_Enum_Block_Type_Enum, data: any, seq: number }>, author: { __typename?: 'user_user', id: any, first_name: string, last_name: string } };

export type GetStoryByIdQueryVariables = Types.Exact<{
  storyId: Types.Scalars['uuid'];
}>;


export type GetStoryByIdQuery = { __typename?: 'query_root', story_story_by_pk?: { __typename?: 'story_story', id: any, title: string, created_at: any, updated_at: any, blocks: Array<{ __typename?: 'story_block', id: any, type: Types.Story_Enum_Block_Type_Enum, data: any, seq: number }>, author: { __typename?: 'user_user', id: any, first_name: string, last_name: string } } | null };

export type CreateStoryMutationVariables = Types.Exact<{
  story: Types.Story_Story_Insert_Input;
}>;


export type CreateStoryMutation = { __typename?: 'mutation_root', insert_story_story_one?: { __typename?: 'story_story', id: any } | null };

export type UpdateStoryMutationVariables = Types.Exact<{
  storyId: Types.Scalars['uuid'];
  story: Types.Story_Story_Set_Input;
}>;


export type UpdateStoryMutation = { __typename?: 'mutation_root', update_story_story_by_pk?: { __typename?: 'story_story', id: any } | null };

export type CreateBlocksMutationVariables = Types.Exact<{
  blocks: Array<Types.Story_Block_Insert_Input> | Types.Story_Block_Insert_Input;
}>;


export type CreateBlocksMutation = { __typename?: 'mutation_root', insert_story_block?: { __typename?: 'story_block_mutation_response', returning: Array<{ __typename?: 'story_block', id: any }> } | null };

export type DeleteBlocksMutationVariables = Types.Exact<{
  blockIds: Array<Types.Scalars['uuid']> | Types.Scalars['uuid'];
}>;


export type DeleteBlocksMutation = { __typename?: 'mutation_root', delete_story_block?: { __typename?: 'story_block_mutation_response', affected_rows: number } | null };

export const StoryDataFragmentDoc = gql`
    fragment StoryData on story_story {
  id
  title
  author {
    id
    first_name
    last_name
  }
  created_at
  updated_at
}
    `;
export const StorySearchResultFragmentDoc = gql`
    fragment StorySearchResult on story_story {
  ...StoryData
  blocks(limit: 1) {
    id
    type
    data
    seq
  }
}
    ${StoryDataFragmentDoc}`;
export const StoryResultFragmentDoc = gql`
    fragment StoryResult on story_story {
  ...StoryData
  blocks {
    id
    type
    data
    seq
  }
}
    ${StoryDataFragmentDoc}`;
export const GetStoriesBySearchDocument = gql`
    query GetStoriesBySearch($search_string: String = "%") {
  story_story(where: {title: {_ilike: $search_string}}) {
    ...StorySearchResult
  }
}
    ${StorySearchResultFragmentDoc}`;

/**
 * __useGetStoriesBySearchQuery__
 *
 * To run a query within a React component, call `useGetStoriesBySearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoriesBySearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoriesBySearchQuery({
 *   variables: {
 *      search_string: // value for 'search_string'
 *   },
 * });
 */
export function useGetStoriesBySearchQuery(baseOptions?: Apollo.QueryHookOptions<GetStoriesBySearchQuery, GetStoriesBySearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoriesBySearchQuery, GetStoriesBySearchQueryVariables>(GetStoriesBySearchDocument, options);
      }
export function useGetStoriesBySearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoriesBySearchQuery, GetStoriesBySearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoriesBySearchQuery, GetStoriesBySearchQueryVariables>(GetStoriesBySearchDocument, options);
        }
export type GetStoriesBySearchQueryHookResult = ReturnType<typeof useGetStoriesBySearchQuery>;
export type GetStoriesBySearchLazyQueryHookResult = ReturnType<typeof useGetStoriesBySearchLazyQuery>;
export type GetStoriesBySearchQueryResult = Apollo.QueryResult<GetStoriesBySearchQuery, GetStoriesBySearchQueryVariables>;
export const GetStoryByIdDocument = gql`
    query GetStoryById($storyId: uuid!) {
  story_story_by_pk(id: $storyId) {
    ...StoryResult
  }
}
    ${StoryResultFragmentDoc}`;

/**
 * __useGetStoryByIdQuery__
 *
 * To run a query within a React component, call `useGetStoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoryByIdQuery({
 *   variables: {
 *      storyId: // value for 'storyId'
 *   },
 * });
 */
export function useGetStoryByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStoryByIdQuery, GetStoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoryByIdQuery, GetStoryByIdQueryVariables>(GetStoryByIdDocument, options);
      }
export function useGetStoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoryByIdQuery, GetStoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoryByIdQuery, GetStoryByIdQueryVariables>(GetStoryByIdDocument, options);
        }
export type GetStoryByIdQueryHookResult = ReturnType<typeof useGetStoryByIdQuery>;
export type GetStoryByIdLazyQueryHookResult = ReturnType<typeof useGetStoryByIdLazyQuery>;
export type GetStoryByIdQueryResult = Apollo.QueryResult<GetStoryByIdQuery, GetStoryByIdQueryVariables>;
export const CreateStoryDocument = gql`
    mutation CreateStory($story: story_story_insert_input!) {
  insert_story_story_one(object: $story) {
    id
  }
}
    `;
export type CreateStoryMutationFn = Apollo.MutationFunction<CreateStoryMutation, CreateStoryMutationVariables>;

/**
 * __useCreateStoryMutation__
 *
 * To run a mutation, you first call `useCreateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoryMutation, { data, loading, error }] = useCreateStoryMutation({
 *   variables: {
 *      story: // value for 'story'
 *   },
 * });
 */
export function useCreateStoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoryMutation, CreateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoryMutation, CreateStoryMutationVariables>(CreateStoryDocument, options);
      }
export type CreateStoryMutationHookResult = ReturnType<typeof useCreateStoryMutation>;
export type CreateStoryMutationResult = Apollo.MutationResult<CreateStoryMutation>;
export type CreateStoryMutationOptions = Apollo.BaseMutationOptions<CreateStoryMutation, CreateStoryMutationVariables>;
export const UpdateStoryDocument = gql`
    mutation UpdateStory($storyId: uuid!, $story: story_story_set_input!) {
  update_story_story_by_pk(pk_columns: {id: $storyId}, _set: $story) {
    id
  }
}
    `;
export type UpdateStoryMutationFn = Apollo.MutationFunction<UpdateStoryMutation, UpdateStoryMutationVariables>;

/**
 * __useUpdateStoryMutation__
 *
 * To run a mutation, you first call `useUpdateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoryMutation, { data, loading, error }] = useUpdateStoryMutation({
 *   variables: {
 *      storyId: // value for 'storyId'
 *      story: // value for 'story'
 *   },
 * });
 */
export function useUpdateStoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoryMutation, UpdateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoryMutation, UpdateStoryMutationVariables>(UpdateStoryDocument, options);
      }
export type UpdateStoryMutationHookResult = ReturnType<typeof useUpdateStoryMutation>;
export type UpdateStoryMutationResult = Apollo.MutationResult<UpdateStoryMutation>;
export type UpdateStoryMutationOptions = Apollo.BaseMutationOptions<UpdateStoryMutation, UpdateStoryMutationVariables>;
export const CreateBlocksDocument = gql`
    mutation CreateBlocks($blocks: [story_block_insert_input!]!) {
  insert_story_block(objects: $blocks) {
    returning {
      id
    }
  }
}
    `;
export type CreateBlocksMutationFn = Apollo.MutationFunction<CreateBlocksMutation, CreateBlocksMutationVariables>;

/**
 * __useCreateBlocksMutation__
 *
 * To run a mutation, you first call `useCreateBlocksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlocksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlocksMutation, { data, loading, error }] = useCreateBlocksMutation({
 *   variables: {
 *      blocks: // value for 'blocks'
 *   },
 * });
 */
export function useCreateBlocksMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlocksMutation, CreateBlocksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlocksMutation, CreateBlocksMutationVariables>(CreateBlocksDocument, options);
      }
export type CreateBlocksMutationHookResult = ReturnType<typeof useCreateBlocksMutation>;
export type CreateBlocksMutationResult = Apollo.MutationResult<CreateBlocksMutation>;
export type CreateBlocksMutationOptions = Apollo.BaseMutationOptions<CreateBlocksMutation, CreateBlocksMutationVariables>;
export const DeleteBlocksDocument = gql`
    mutation DeleteBlocks($blockIds: [uuid!]!) {
  delete_story_block(where: {id: {_in: $blockIds}}) {
    affected_rows
  }
}
    `;
export type DeleteBlocksMutationFn = Apollo.MutationFunction<DeleteBlocksMutation, DeleteBlocksMutationVariables>;

/**
 * __useDeleteBlocksMutation__
 *
 * To run a mutation, you first call `useDeleteBlocksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlocksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlocksMutation, { data, loading, error }] = useDeleteBlocksMutation({
 *   variables: {
 *      blockIds: // value for 'blockIds'
 *   },
 * });
 */
export function useDeleteBlocksMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlocksMutation, DeleteBlocksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlocksMutation, DeleteBlocksMutationVariables>(DeleteBlocksDocument, options);
      }
export type DeleteBlocksMutationHookResult = ReturnType<typeof useDeleteBlocksMutation>;
export type DeleteBlocksMutationResult = Apollo.MutationResult<DeleteBlocksMutation>;
export type DeleteBlocksMutationOptions = Apollo.BaseMutationOptions<DeleteBlocksMutation, DeleteBlocksMutationVariables>;