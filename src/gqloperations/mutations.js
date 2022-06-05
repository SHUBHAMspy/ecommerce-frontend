import { gql } from "@apollo/client";

export const loginUser = gql`
mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        email
      }
  
    }
  }
`

export const signUpUser = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
      register(input: $input) {
        jwt
        user {
          username
          email
        }
      }
    }
`