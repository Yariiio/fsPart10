import { gql } from '@apollo/client'

export const SIGNIN_USER = gql`
    mutation mutate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            user {
                username
            }
            accessToken
        }
    }
`
