import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UserProfile from 'pages/user/profile'
import Layout from 'components/Layout'

const Settings = () => null

const Members = ({ match }) => {
    return (
        <Layout boxed={false}>
            <Switch>
                <Route path={`${match.url}/`} component={UserProfile} exact />
                <Route
                    path={`${match.url}/settings`}
                    component={Settings}
                    exact
                />
            </Switch>
        </Layout>
    )
}

export default Members
