import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Profile from 'pages/user/profile'
import MyProjects from 'pages/user/my_projects'
import Settings from 'pages/user/settings'

import Layout from 'components/Layout'

const Members = ({ match }) => {
    return (
        <Layout>
            <Switch>
                <Route path={`${match.url}/`} component={Profile} exact />
                <Route
                    path={`${match.url}/my-projects`}
                    component={MyProjects}
                    exact
                />

                <Route
                    path={`${match.url}/create-project`}
                    component={MyProjects}
                    exact
                />

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
