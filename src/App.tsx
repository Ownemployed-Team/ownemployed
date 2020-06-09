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
import Members from 'pages/members'
import Privacy from 'pages/privacy'
import PrivacyPolicy from 'pages/privacy/privacyPolicy'
import TermsOfService from 'pages/privacy/termsOfService'
import NoMatch from 'pages/404/404'

//import SignUpForm from 'pages/signup/signup'

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
                    <Route path="/create-project" component={Projects} />
                    <Route path="/legal" component={Privacy} exact={true} />
                    <Route
                        path="/legal/privacy-policy"
                        component={PrivacyPolicy}
                        exact={true}
                    />
                    <Route
                        path="/legal/terms-of-service"
                        component={TermsOfService}
                        exact={true}
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
