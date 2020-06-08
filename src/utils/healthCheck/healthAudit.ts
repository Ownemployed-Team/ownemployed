import { useQuery } from '@apollo/react-hooks'
import { CloudinaryContext } from 'cloudinary-react'
import { useAuth0 } from './../../lib/react-auth0-spa'
import GET_PROJECTS from 'graphql/get-projects'

export enum auditTypes {
    BASE,
    DATABASE,
}
export enum auditDatabaseConnectionType {
    BACKEND_API,
    OAUTH_API,
    CLOUDINARY_API,
    APOLLOCLIENT,
}

interface auditParams {
    required: boolean
    type: auditTypes
    name: String
}

interface _request_response_pair {
    url_path: String
    expected_result: String
}

interface auditDatabaseParams {
    base: auditParams
    database_type: auditDatabaseConnectionType
    database_connection_object: Object
    connection_base_url?: String
    request_response_pairs?: _request_response_pair[]
}

export class Audit {
    // Props
    req
    type
    name

    // Init
    constructor(args: auditParams) {
        this.req = args.required
        this.type = args.type
        this.name = args.name
    }

    // Returns wether the Audit passed its criteria as a promise
    async evaluate(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            await resolve(true)
        })
    }
}

export class AuditDatabase extends Audit {
    // Props
    connection_base_url
    request_response_pairs
    database_type
    database_connection_object

    constructor(args: auditDatabaseParams) {
        // Apply base parameters
        super({
            required: args.base.required,
            type: args.base.type,
            name: args.base.name,
        })
        this.connection_base_url = args.connection_base_url
        this.request_response_pairs = args.request_response_pairs
        this.database_type = args.database_type
        this.database_connection_object = args.database_connection_object
    }

    // Override this normal evaluate and check if theres a connection to this db
    evaluate(): Promise<boolean> {
        console.log('Evaluating health audit for:  ' + this.name)

        return new Promise((resolve, reject) => {
            switch (this.database_type) {
                case auditDatabaseConnectionType.BACKEND_API:
                    // Check the connection to our backend

                    break

                case auditDatabaseConnectionType.CLOUDINARY_API:
                    // Check the cloudinary api

                    break

                case auditDatabaseConnectionType.OAUTH_API:
                    //if (useAuth0.isAuthenticated? )
                    break

                case auditDatabaseConnectionType.APOLLOCLIENT:
                    // Check the apollo client connection to the graphQL db.
                    const _res = useQuery(GET_PROJECTS)
                    _res.error != undefined ? resolve(true) : reject(false)

                default:
                    break
            }
        })
    }
}
