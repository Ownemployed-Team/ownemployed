import React from 'react'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory } from 'history'
import 'antd/dist/antd.css'
import './index.css'
import routes from './routes'
import ThemeProvider from 'components/ThemeProvider'

const history = createBrowserHistory()

function App() {
    return (
        <Router history={history}>
            <ThemeProvider>{renderRoutes(routes)}</ThemeProvider>
        </Router>
    )
}

export default App
