import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from 'config/theme'

export default props => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
