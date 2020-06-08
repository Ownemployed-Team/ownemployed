import healthCheckStrategy from './healthCheckStrategy'
import {
    AuditDatabase,
    auditTypes,
    auditDatabaseConnectionType,
} from './healthAudit'
import { ApolloClient } from 'apollo-boost'
import React, {
    FunctionComponent,
    ReactChild,
    ReactChildren,
    ReactElement,
} from 'react'

// This needs to be a react element to access the DB scope. We need to use flux 
// and store our concurrent connections in memory there.
export const HealthCheck = (): JSX.Element => {
    let strategy = new healthCheckStrategy()
    let throw_err = true

    let backend_connection
    let oauth_connection
    let cloudinary_connection
    let apollo_connection

    // Backend check
    strategy.build_audit(
        new AuditDatabase({
            base: {
                required: throw_err,
                type: auditTypes.DATABASE,
                name: 'backend audit',
            },
            connection_base_url: '',
            request_response_pairs: [],
            database_type: auditDatabaseConnectionType.BACKEND_API,
            database_connection_object: backend_connection,
        })
    )

    // OAuth check
    strategy.build_audit(
        new AuditDatabase({
            base: {
                required: throw_err,
                type: auditTypes.DATABASE,
                name: 'OAuth audit',
            },
            database_type: auditDatabaseConnectionType.OAUTH_API,
            database_connection_object: oauth_connection,
        })
    )

    // Cloudinary check
    strategy.build_audit(
        new AuditDatabase({
            base: {
                required: throw_err,
                type: auditTypes.DATABASE,
                name: 'Cloudinary audit',
            },
            database_type: auditDatabaseConnectionType.CLOUDINARY_API,
            database_connection_object: cloudinary_connection,
        })
    )

    // Apollo check
    strategy.build_audit(
        new AuditDatabase({
            base: {
                required: throw_err,
                type: auditTypes.DATABASE,
                name: 'apollo graphQL audit',
            },
            database_type: auditDatabaseConnectionType.APOLLOCLIENT,
            database_connection_object: apollo_connection,
        })
    )
    /*
    return new Promise(async (resolve, reject) => {
        // Running audits
        let health_check_success = await strategy.check_audits()

        // Returning result
        if (health_check_success) await resolve(true)
        if (!health_check_success) await reject(true)
    }) */

    let _q = strategy.check_audits()
    _q.then(res => {
        console.log('audits succesful?: ' + res)
    }).catch(rejection => {
        console.log('audits not successful')
    })

    return <span></span>
}
