import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'reset.css'

import Home from 'pages/home/home'
import BusinessProfile from 'pages/business/profile'
import UserProfile from 'pages/user/profile'
import ExploreIdeas from 'pages/explore/explore'
import Members from 'pages/members/members'
import SignUpForm from 'pages/signup/signup'
import NoMatch from 'pages/404/404'

function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <Switch>
                    <Route component={Home} path="/" exact={true} />
                    <Route path="/community" exact={true} />
                    <Route path="/auth" exact={true} />
                    <Route path="/members" component={Members} />
                    <Route path="/projects" />
                    <Route path="/learn" />

                    <PrivateRoute path="/profile" component={UserProfile} />
                    {/*
                    <PrivateRoute path="/profile" component={UserProfile} />
                    */}
                    <Route component={NoMatch} />
                    {/*
                    <Route
                        component={ExploreIdeas}
                        path="/projects"
                        exact={true}
                    />
                    <Route component={Members} path="/members" exact={true} />
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

                    <Route exact={true} component={Members} path="/community" />

                         */}
                </Switch>
            </ThemeProvider>
        </Router>
    )
}

export default App
