/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../../app/services/types.generated';

import { api } from '../../app/services/baseApi';
export type UpdateTodoByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  todoPatch?: Types.InputMaybe<Types.TodoPatch>;
}>;


export type UpdateTodoByIdMutation = { __typename?: 'Mutation', updateTodoById?: { __typename?: 'UpdateTodoPayload', todo?: { __typename?: 'Todo', description: string, completed: boolean, id: number } } };


export const UpdateTodoByIdDocument = `
    mutation updateTodoById($id: Int = 3, $todoPatch: TodoPatch = {}) {
  updateTodoById(input: {todoPatch: $todoPatch, id: $id}) {
    todo {
      description
      completed
      id
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateTodoById: build.mutation<UpdateTodoByIdMutation, UpdateTodoByIdMutationVariables | void>({
      query: (variables) => ({ document: UpdateTodoByIdDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUpdateTodoByIdMutation } = injectedRtkApi;

