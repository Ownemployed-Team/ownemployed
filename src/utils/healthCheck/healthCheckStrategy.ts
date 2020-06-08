import { Audit } from './healthAudit'
import { Component } from 'react'

interface healthCheckStrategyInterface {
    build_audit(audit: Audit)
    check_audits()
    audits: Audit[]
}

export default class healthCheckStrategy
    implements healthCheckStrategyInterface {
    audits: Audit[] = []

    constructor(...params) {}

    // Populate the audit list
    build_audit(audit: Audit): Promise<boolean> {
        let _audit: Audit = audit
        return new Promise(resolve => {
            this.audits.push(_audit)
            resolve(true)
        })
    }

    check_audits(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            // Evaluate all the audits
            this.audits.forEach((audit: Audit) => {
                let _aduit_eval = audit.evaluate()
                if (!_aduit_eval) {
                    reject(true)
                    console.log('FAILED HEALTH CHECK!')
                }
            })
            resolve(true)
        })
    }
}
