import { gql } from 'apollo-boost'

// Getting Project's profile data
const GET_PROJECT = gql`
    query getProject($projectId: String!) {
        getProject(id: $projectId) {
            id
            name
            createdAt
            owner {
                id
            }
            contributors {
                id
            }
            status
            summary
            description
        }
    }
`

export default GET_PROJECT
