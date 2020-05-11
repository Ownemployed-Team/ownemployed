import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'antd/dist/antd.css'
import 'index.css'

import Home from 'pages/home/home'
import BusinessProfile from 'pages/business/profile'
import UserProfile from 'pages/user/profile'
import ExploreIdeas from 'pages/explore/explore'
import Members from 'pages/members/members'
import SignUpForm from 'pages/signup/signup'

function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <Switch>
                    <Route component={Home} path="/" exact={true} />
                    <Route
                        component={ExploreIdeas}
                        path="/projects"
                        exact={true}
                    />
                    <Route component={Members} path="/members" exact={true} />
                    <Route
                        component={SignUpForm}
                        path="/sign-up"
                        exact={true}
                    />
                    <Route
                        component={BusinessProfile}
                        exact={true}
                        path="/projects/:businessProfileId"
                    />
                    <Route
                        exact={true}
                        component={UserProfile}
                        path="/members/:userProfileId"
                    />
                </Switch>
            </ThemeProvider>
        </Router>
    )
}

export default App
