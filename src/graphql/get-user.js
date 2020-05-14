import { gql } from 'apollo-boost'
// Getting User's profile data
export const GET_USER = gql`
    query getUser($userId: String!) {
        getUser(id: $userId) {
            name
            signupDate
            socialMedia {
                name
                url
            }
            interests
            lookingFor
            skills
            education
            location
        }
    }
`
