import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'reset.css'

import Home from 'pages/home/home'
import TOS from 'pages/tos'
import GDPR from 'pages/gdpr'
import UserProfile from 'pages/user'
import Projects from 'pages/projects'
import Members from 'pages/members'
import NoMatch from 'pages/404/404'
//import SignUpForm from 'pages/signup/signup'

function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <Switch>
                    <Route component={Home} path="/" exact={true} />
                    <Route path="/community" exact={true} />
                    <Route path="/auth" exact={true} />
                    <Route path="/members" component={Members} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/tos" component={TOS} />
                    <Route path="/gdpr" component={GDPR} />
                    <PrivateRoute path="/profile" component={UserProfile} />

                    <Route component={NoMatch} />

                    {/*
                        <Route path="/learn" />
                        <PrivateRoute path="/profile" component={MemberProfile} />
                    */}
                </Switch>
            </ThemeProvider>
        </Router>
    )
}

export default App
