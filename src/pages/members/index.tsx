import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MemberProfile from 'pages/members/profile'
import AllMembers from 'pages/members/members'

const Members = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.url}/`} component={AllMembers} exact />
            <Route
                path={`${match.url}/:memberProfileId`}
                component={MemberProfile}
                exact
            />
        </Switch>
    )
}

export default Members
