/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeaf = /* GraphQL */ `
  query GetLeaf($id: ID!) {
    getLeaf(id: $id) {
      id
      text
      sendunixtime
      createdAt
      updatedAt
    }
  }
`;
export const listLeaves = /* GraphQL */ `
  query ListLeaves(
    $filter: ModelLeafFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        sendunixtime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
