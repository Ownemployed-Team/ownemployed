import { gql } from 'apollo-boost'

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
export const GET_USERS = gql`
    query getUsers(
        $name: String
        $location: String
        $skills: [String]
        $sectors: [String]
        $skip: Int
        $take: Int
    ) {
        getUsers(
            name: $name
            location: $location
            skills: $skills
            sectors: $sectors
            skip: $skip
            take: $take
        ) {
            id
            firstName
            lastName
            email
            signupDate
            headline
            education
            bio
            location
            remote
            skills {
                id
                title
                category
            }
            sectors {
                id
                title
                category
            }
            socialMedia {
                name
                url
            }
            emailVisibility
            avatar
        }
    }
`
