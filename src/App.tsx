import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'reset.css'

import Home from 'pages/home/home'
import BusinessProfile from 'pages/projects/profile'
// import UserProfile from 'pages/user/profile'
import Projects from 'pages/projects/projects'
import Members from 'pages/members/members'
import MemberProfile from 'pages/members/profile'
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

                    {/*
                    <PrivateRoute path="/profile" component={MemberProfile} />
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
                        component={MemberProfile}
                        exact={true}
                        path="/members/:memberProfileId"
                    />

                    <Route exact={true} component={Members} path="/community" />

                         */}
                </Switch>
            </ThemeProvider>
        </Router>
    )
}

export default App
