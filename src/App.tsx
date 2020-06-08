import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'reset.css'
import AboutPage from 'pages/about'
import Home from 'pages/home/home'
import UserProfile from 'pages/user'
import Projects from 'pages/projects'
import CreateProjectPage from 'pages/createProjects'
import Members from 'pages/members'
import NoMatch from 'pages/404/404'
import TermsOfUsePage from 'pages/termsOfUse'


function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <Switch>
                    <Route component={Home} path="/" exact={true} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/community" exact={true} />
                    <Route path="/auth" exact={true} />
                    <Route path="/members" component={Members} />
                    <Route path="/projects" component={Projects} />
                    <PrivateRoute path="/profile" component={UserProfile} />
                    <Route
                        path="/create-project"
                        component={CreateProjectPage}
                    />
                    <Route path="/terms-of-use" component={TermsOfUsePage} />

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
