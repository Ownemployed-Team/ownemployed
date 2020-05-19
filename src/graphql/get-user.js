import { gql } from 'apollo-boost'
// Getting User's profile data
const GET_USER = gql`
    query getUser($userId: String!) {
        getUser(id: $userId) {
            id
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

export default GET_USER
