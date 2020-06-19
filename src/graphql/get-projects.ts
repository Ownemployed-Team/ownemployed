import { gql } from 'apollo-boost'

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
const GET_PROJECTS = gql`
    query getProjects($skip: Int, $take: Int) {
        getProjects {
            id
            name
            createdAt
            owner {
                id
            }
            summary
            description
            status
            website
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
            contributors {
                id
            }
            picture
        }
    }
`

export default GET_PROJECTS
