import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'

import ProjectProfile from 'pages/projects/profile'
import AllProjects from 'pages/projects/projects'

const Projects = ({ match }) => {
    return (
        <Layout boxed>
            <Switch>
                <Route path={`${match.url}/`} component={AllProjects} exact />
                <Route
                    path={`${match.url}/:businessProfileId`}
                    component={ProjectProfile}
                    exact
                />
            </Switch>
        </Layout>
    )
}

export default Projects
