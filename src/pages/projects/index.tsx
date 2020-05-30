import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'

import ProjectProfile from 'pages/projects/profile'
import AllProjects from 'pages/projects/projects'
import CreateProject from 'pages/projects/createProject'

const Projects = ({ match }) => {
    return (
        <Layout boxed>
            <Switch>
                <Route path={'/projects'} component={AllProjects} exact />
                <Route path={'/create-project'} component={CreateProject} />
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
