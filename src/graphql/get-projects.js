import { gql } from 'apollo-boost'

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
const GET_PROJECTS = gql`
    query getProjects($skip: Int, $take: Int) {
        getProjects(skip: $skip, take: $take) {
            id
            name
            creationDate
            ownerId
            shortDescription
            description
            status
            links
            remote
            sectors {
                id
                title
                category
            }
            skillsRequired {
                id
                title
                category
            }
            contributors
            picture
        }
    }
`

export default GET_PROJECTS
