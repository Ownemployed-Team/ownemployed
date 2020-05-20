import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'reset.css'

import Layout from 'components/PageLayout'

import Home from 'pages/home/home'
import BusinessProfile from 'pages/projects/profile'
// import UserProfile from 'pages/user/profile'
import Projects from 'pages/projects'
import Members from 'pages/members'
import SignUpForm from 'pages/signup/signup'
import NoMatch from 'pages/404/404'

const menuItems = [
    { label: 'Projects', url: '/projects' },
    { label: 'Members', url: '/members' },
    { label: 'Learn', url: '/learn' },
    { label: 'Community', url: 'http://community.ownemployed.com/' },
    { label: 'Account', url: '/profile', isPrivate: true },
    { label: 'Login/Register', url: '/auth', isAuth: true },
]

function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <Layout menuItems={menuItems}>
                    <Switch>
                        <Route component={Home} path="/" exact={true} />
                        <Route path="/community" exact={true} />
                        <Route path="/auth" exact={true} />
                        <Route path="/members" component={Members} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/learn" />

                        <Route component={NoMatch} />

                        {/*
                    <PrivateRoute path="/profile" component={MemberProfile} />
                    <PrivateRoute path="/profile" component={UserProfile} />
                    */}
                    </Switch>
                </Layout>
            </ThemeProvider>
        </Router>
    )
}

export default App
