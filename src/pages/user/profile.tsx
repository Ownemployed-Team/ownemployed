import * as React from 'react'
import PageLayout from 'components/PageLayout'

import TagsCard from 'components/TagsCard'
import BusinessCard from 'components/BusinessCard'
import PageIntro from 'components/PageIntro'

import Text from 'components/Text'
import Link from 'components/Link'
import Card from 'components/Card'

import { Route, Switch, useParams } from 'react-router-dom'

const Main = ({ match }) => {
    // TODO eventually move this to its own component file
    return (
        <>
            <Text as="h3">My Profile</Text>
            <Text as="p">
                Help the Ownemployed community get to know you better.
            </Text>
            <hr />
            <Link to={`${match.url}/settings`}>Settings</Link>
        </>
    )
}
const Settings = () => {
    // TODO eventually move this to its own component file
    return <Text as="h3">Settings</Text>
}

const Profile = ({ match }) => {
    return (
        <PageLayout>
            <Card
                sx={{
                    mt: 4,
                    padding: 4,
                    borderRadius: 'default',
                }}
            >
                <Switch>
                    <Route path={`${match.url}/`} component={Main} exact />
                    <Route
                        path={`${match.url}/settings`}
                        component={Settings}
                        exact
                    />
                </Switch>
            </Card>
        </PageLayout>
    )
}

export default Profile
