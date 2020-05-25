import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProjectProfile from 'pages/projects/profile'
import ProjectsList from 'pages/user/my_projects/list'

const MyProjects = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.url}/`} component={ProjectsList} exact />
            <Route path={`${match.url}/:id`} component={ProjectProfile} exact />
        </Switch>
    )
}

export default MyProjects
