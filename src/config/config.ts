export default {
    debug: process.env.REACT_APP_DEBUG,
    apiURL: process.env.REACT_APP_API_URL,
    auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
    auth0Audience: process.env.REACT_APP_AUTH0_AUDIENCE || '',
    auth0ClientID: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
}
