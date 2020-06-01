import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TermsOfUse from 'pages/termsOfUse/termsOfUse'
import Layout from 'components/Layout'

const TermsOfUsePage = ({ match }) => {
    return (
        <Layout>
            <Switch>
                <Route path={`${match.url}/`} component={TermsOfUse} exact />
            </Switch>
        </Layout>
    )
}

export default TermsOfUsePage
