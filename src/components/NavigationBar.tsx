import React from 'react'
import { NavLink } from 'components/NavLink'
import { Flex, Box, Image } from 'rebass'
import logo from 'static/ownemployed_logo.svg'
import hamburger from 'static/hamburger.svg'
import profile from 'static/profile.svg'
import { useAuth0 } from 'lib/react-auth0-spa'

type NavigationItem = {
    label: string
    url: string
    isPrivate?: boolean
    isAuth?: boolean
}

const Brand = () => {
    return (
        <NavLink to="/">
            <Image
                alt="logo"
                src={logo}
                alignContent="center"
                width="245px"
                sx={{
                    '@media screen and (max-width: 643px)': {
                        width: '153px',
                    },
                }}
            />
        </NavLink>
    )
}

const Hamburger = () => {
    return (
        <NavLink to="">
            <Image
                alt="hamburger"
                pr={5}
                src={hamburger}
                sx={{
                    '@media screen and (min-width: 643px)': {
                        display: 'none',
                    },
                    '@media screen and (max-width: 643px)': {
                        width: ['100%'],
                    },
                }}
            />
        </NavLink>
    )
}

const Profile = () => {
    return (
        <NavLink to="/members/:memberProfileId">
            <Image
                alt="profile"
                alignContent="center"
                src={profile}
                width="21px"
                ml={4}
                sx={{
                    '@media screen and (min-width: 643px )': {
                        display: 'none',
                    },
                }}
            />
        </NavLink>
    )
}

const NavigationBar = ({ items }: { items: NavigationItem[] }) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    return (
        <Flex color="black" alignItems="center" bg="#fff">
            <Hamburger />
            <Brand />
            <Profile />
            <Box mr="auto" />
            <Flex
                alignItems="center"
                sx={{
                    '@media screen and (max-width: 643px)': {
                        display: 'none',
                    },
                }}
            >
                {items
                    .filter(item => {
                        // NOTE check if private, then return the results of isAuthenticated
                        return item.isPrivate ? isAuthenticated : true
                    })
                    .map((item, index) => {
                        if (item.isAuth) {
                            return (
                                <NavLink
                                    to=""
                                    key={index}
                                    onClick={
                                        isAuthenticated
                                            ? () => logout()
                                            : () => loginWithRedirect({})
                                    }
                                >
                                    {isAuthenticated ? 'Logout' : item.label}
                                </NavLink>
                            )
                        }
                        return (
                            <NavLink key={index} to={item.url}>
                                {item.label}
                            </NavLink>
                        )
                    })}
            </Flex>
        </Flex>
    )
}

export default NavigationBar
