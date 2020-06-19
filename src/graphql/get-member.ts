import { gql } from 'apollo-boost'

// Getting User's profile data
const GET_MEMBER = gql`
    query getMember($id: String!) {
        getMember(id: $id) {
            id
            firstName
            lastName
            createdAt
            socialMedia {
                name
                url
            }
            skills {
                title
            }
            education
            location
        }
    }
`

export default GET_MEMBER
