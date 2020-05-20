import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'

import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'

const Main = ({ children }) => {
    return (
        <Box
            maxWidth={'1400px'}
            width={1}
            pt={3}
            pb={3}
            pl={[4, 4, 6]}
            pr={[4, 4, 6]}
            mx={'auto'}
            sx={{ flex: 1 }}
            fontFamily="body"
        >
            <main>{children}</main>
        </Box>
    )
}

const Layout = ({ children, menuItems }) => {
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
                <Main>{children}</Main>
                <Footer />
            </Flex>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
