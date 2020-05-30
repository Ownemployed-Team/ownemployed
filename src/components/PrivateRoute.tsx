import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from 'lib/react-auth0-spa'

const PrivateRoute = ({ component: Component, path, ...props }) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

    useEffect(() => {
        if (loading || isAuthenticated) {
            return
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: window.location.pathname },
            })
        }
        fn()
    }, [loading, isAuthenticated, loginWithRedirect, path])

    const render = props =>
        isAuthenticated === true ? <Component {...props} /> : null

    return <Route path={path} render={render} {...props} />
}

export default PrivateRoute
