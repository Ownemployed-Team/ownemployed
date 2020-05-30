import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'
import About from 'pages/about/about'

const AboutPage = ({ match }) => {
    return (
        <Layout boxed={false}>
            <Switch>
                <Route path={`${match.url}/`} component={About} exact />
            </Switch>
        </Layout>
    )
}

export default AboutPage
