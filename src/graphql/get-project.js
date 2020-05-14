import { gql } from 'apollo-boost'

// Getting Project's profile data
export const GET_PROJECT = gql`
    query getProject($projectId: String!) {
        getProject(id: $projectId) {
            name
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
