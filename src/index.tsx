import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'
import { Auth0Provider } from 'lib/react-auth0-spa'
import * as serviceWorker from './serviceWorker'
import { useConfig } from 'config/Context'
import history from 'utils/history'
import { CloudinaryContext } from 'cloudinary-react'
import { HealthCheck } from './utils/healthCheck/healthCheck'

const Application = () => {
    const {
        apiURL,
        auth0Domain,
        auth0ClientID,
        auth0Audience,
        cloudinaryCloudName,
        cloudinaryAPIKey,
        cloudinaryAPISecret,
    } = useConfig()

    const client = new ApolloClient({
        uri: `${apiURL}/graphql`,
    })

    return (
        <CloudinaryContext
            cloudName={cloudinaryCloudName}
            apiKey={cloudinaryAPIKey}
            apiSecret={cloudinaryAPISecret}
        >
            <ApolloProvider client={client}>
                <React.StrictMode>
                    <Auth0Provider
                        onRedirectCallback={onRedirectCallback}
                        options={{
                            domain: auth0Domain,
                            client_id: auth0ClientID,
                            redirect_uri: window.location.origin,
                            audience: auth0Audience,
                        }}
                    >
                        <HealthCheck />

                        <App />
                    </Auth0Provider>
                </React.StrictMode>
            </ApolloProvider>
        </CloudinaryContext>
    )
}

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    )
}

ReactDOM.render(<Application />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
