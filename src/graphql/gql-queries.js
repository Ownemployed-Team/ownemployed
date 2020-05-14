import { gql } from 'apollo-boost'

// Getting User's profile data
export const GET_USER = gql`
    query getUser($userId: String!) {
        getUser(id: $userId) {
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

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
export const GET_USERS = gql`
    {
        getUsers {
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

// Getting Project's profile data
export const GET_PROJECT = gql`
    query getBusiness($projectId: String!) {
        getBusiness(id: $projectId) {
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

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
export const GET_PROJECTS = gql`
    {
        getBusinesses {
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
