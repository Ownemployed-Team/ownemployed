import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
// import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

import { Auth0Provider } from 'lib/react-auth0-spa'
import config from 'config/config'
import history from 'utils/history'

const client = new ApolloClient({
    uri: 'https://ownemployed-backend.herokuapp.com/api/v1/graphql',
})

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    )
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <Auth0Provider
                onRedirectCallback={onRedirectCallback}
                options={{
                    domain: config.auth0Domain,
                    client_id: config.auth0ClientID,
                    redirect_uri: window.location.origin,
                    audience: config.auth0Audience,
                }}
            >
                <App />
            </Auth0Provider>
        </React.StrictMode>
        ,
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
