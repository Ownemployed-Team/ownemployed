import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'

import MemberProfile from 'pages/members/profile'
import AllMembers from 'pages/members/members'

const Members = ({ match }) => {
    return (
        <Layout>
            <Switch>
                <Route path={`${match.url}/`} component={AllMembers} exact />
                <Route
                    path={`${match.url}/:memberProfileId`}
                    component={MemberProfile}
                    exact
                />
            </Switch>
        </Layout>
    )
}

export default Members
