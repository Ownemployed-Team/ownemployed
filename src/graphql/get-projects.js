import { gql } from 'apollo-boost'

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
const GET_PROJECTS = gql`
    query getProjects($skip: Int, $limit: Int) {
        getProjects(skip: $skip, limit: $limit) {
            id
            name
            # ownerID
            status
            contributors
            tagline
            description
            keyActivities
            channels
        }
    }
`

export default GET_PROJECTS
