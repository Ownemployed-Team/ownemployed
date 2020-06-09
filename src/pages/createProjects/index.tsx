import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'
import CreateProject from 'pages/createProjects/createProject'

const CreateProjectPage = ({ match }) => {
    return (
        <Layout boxed={false}>
            <Switch>
                <Route path={`${match.url}`} component={CreateProject} />
            </Switch>
        </Layout>
    )
}

export default CreateProjectPage
