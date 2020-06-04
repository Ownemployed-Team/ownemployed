import { gql } from 'apollo-boost'

// Getting Project's profile data
const GET_PROJECT = gql`
    query getProject($projectId: String!) {
        getProject(id: $projectId) {
            id
            name
            creationDate
            ownerID
            status
            contributors
            tagline
            description
            keyActivities
            channels
        }
    }
`

export default GET_PROJECT
