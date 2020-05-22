import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'

import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'

const Main = ({ children, boxed }) => {
    return (
        <Box
            pt={3}
            pb={3}
            sx={{
                flex: 1,
                mx: boxed ? 'auto' : 0,
                pl: boxed ? 0 : [4, 4, 6],
                pr: boxed ? 0 : [4, 4, 6],
            }}
            fontFamily="body"
        >
            <main>{children}</main>
        </Box>
    )
}

const Layout = ({ children, menuItems, boxed = false }) => {
    return (
        <>
            <Flex
                sx={{
                    flexDirection: 'column',
                    minHeight: '100vh',
                    margin: 0,
                    padding: 0,
                }}
            >
                <NavigationBar items={menuItems} />
                <Main boxed>{children}</Main>
                <Footer />
            </Flex>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
