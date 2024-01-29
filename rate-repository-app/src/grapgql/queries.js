import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    description
                    forksCount
                    fullName
                    language
                    ownerAvatarUrl
                    ratingAverage
                    reviewCount
                    stargazersCount
                }
            }
        }
    }
`
export const GET_CURRENT_USER = gql`
    query {
        me {
            id
            username
        }
    }
`
