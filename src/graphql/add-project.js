import { gql } from 'apollo-boost'

const ADD_PROJECT = gql`
    mutation AddProject($data: NewProjectInput) {
        addProject(data: $data) {
            name
            owner {
                id
                firstName
                lastName
            }
            description
            website
            picture
        }
    }
`

export default ADD_PROJECT
