import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UserProfile from 'pages/user/profile'

const Settings = () => null

const Members = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.url}/`} component={UserProfile} exact />
            <Route path={`${match.url}/settings`} component={Settings} exact />
        </Switch>
    )
}

export default Members
