import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Auth0Provider } from 'lib/react-auth0-spa'
import ConfigContext from 'config/Context'
import history from 'utils/history'

const Application = () => {
    const { apiURL, auth0Domain, auth0ClientID, auth0Audience } = useContext(
        ConfigContext
    )

    const client = new ApolloClient({
        uri: `${apiURL}/graphql`,
    })

    return (
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
                    <App />
                </Auth0Provider>
            </React.StrictMode>
        </ApolloProvider>
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
