import { gql } from 'apollo-boost'

const ADD_PROJECT = gql`
    mutation AddProject(
        $id: ID!
        $name: String!
        $creationDate: DateTime!
        $ownerId: ID!
        $shortDescription: String
        $description: String
        $status: String
        $links: String
        $location: [String!]
        $remote: Boolean
        $sectors: [Tag!]
        $skillsRequired: [Tag!]
        $contributors: [ID!]
        $picture: String
    ) {
        addProject(
            id: $id
            name: $name
            creationDate: $creationDate
            ownerId: $ownerId
            shortDescription: $shortDescription
            description: $description
            status: $status
            links: $links
            location: $location
            remote: $remote
            sectors: $sectors
            skillsRequired: $skillsRequired
            contributors: $contributors
            picture: $picture
        ) {
            name
            ownerId
            shortDesciption
            creationDate
        }
    }
`

export default ADD_PROJECT
