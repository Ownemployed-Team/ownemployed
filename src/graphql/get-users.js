import { gql } from 'apollo-boost'

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
export const GET_USERS = gql`
    {
        getUsers {
            id
            name
            signupDate
            socialMedia {
                name
                url
            }
            avatar
            interests
            lookingFor
            skills
            education
            location
        }
    }
`
