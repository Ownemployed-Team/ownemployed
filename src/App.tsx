import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import ThemeProvider from 'components/ThemeProvider'
import history from 'utils/history'
import 'reset.css'
import AboutPage from 'pages/about'
import Home from 'pages/home/home'
import UserProfile from 'pages/user'
import LoginPage from 'pages/login'
import Projects from 'pages/projects'
import CreateProjectPage from 'pages/createProjects'
import Members from 'pages/members'
import Privacy from 'pages/privacy'
import PrivacyPolicy from 'pages/privacy/privacyPolicy'
import NoMatch from 'pages/404/404'
import TermsOfUse from 'pages/privacy/termsOfUse'

function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/community" exact />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/signup" exact component={LoginPage} />
                    <Route path="/members" component={Members} />
                    <Route path="/projects" component={Projects} />
                    <PrivateRoute path="/profile" component={UserProfile} />
                    <Route path="/legal" component={Privacy} exact />
                    <Route
                        path="/legal/privacy-policy"
                        component={PrivacyPolicy}
                        exact
                    />
                    <Route path="/legal/terms-of-use" component={TermsOfUse} />
                    <Route
                        path="/create-project"
                        component={CreateProjectPage}
                    />
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
