import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import CookieConsent from 'react-cookie-consent'

import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'

const menuItems = [
    { label: 'Projects', url: '/projects' },
    { label: 'Members', url: '/members' },
    // { label: 'Learn', url: '/learn' },
    { label: 'Community', url: 'https://ownemployed.tribe.so/' },
    { label: 'Account', url: '/profile', isPrivate: true },
    { label: 'Create project', url: '/create-project', isPrivate: true },
    { label: 'My Account', url: '/signup', isAuth: true },
]

const Main = ({ children, boxed }) => {
    return (
        <Box
            pt={3}
            pb={3}
            sx={{
                flex: 1,
                mx: boxed ? 'auto' : 0,
                pl: boxed ? [4, 4, 6] : 0,
                pr: boxed ? [4, 4, 6] : 0,
            }}
            fontFamily="body"
        >
            <main>{children}</main>
        </Box>
    )
}

const Layout = ({ children, boxed = true }) => {
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
                <Main boxed={boxed}>{children}</Main>
                <CookieConsent
                    acceptOnScroll={true}
                    buttonStyle={{}}
                    buttonText="Agree"
                    cookieName="ownemployed-cookie-accepted"
                    enableDeclineButton
                    contentStyle={{ flex: 'none' }}
                    location="bottom"
                    style={{ justifyContent: 'center', background: '#124780' }}
                >
                    By continuing you agree to our terms of service. Read our
                    Privacy Policy <Link to="/legal">here</Link>
                </CookieConsent>
                <Footer />
            </Flex>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
