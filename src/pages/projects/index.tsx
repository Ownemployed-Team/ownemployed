import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProjectProfile from 'pages/projects/profile'
import AllProjects from 'pages/projects/projects'

const Projects = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.url}/`} component={AllProjects} exact />
            <Route
                path={`${match.url}/:businessProfileId`}
                component={ProjectProfile}
                exact
            />
        </Switch>
    )
}

export default Projects
