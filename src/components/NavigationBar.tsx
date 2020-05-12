import React from 'react'
import { NavLink } from 'components/NavLink'
import { Flex, Box } from 'rebass'
import logo from 'static/ownemployed_logo.png'
import Button from './Button'
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
            <img alt="logo" src={logo} width="245px" />
        </NavLink>
    )
}

const NavigationBar = ({ items }: { items: NavigationItem[] }) => {
    const { isAuthenticated } = useAuth0()

    return (
        <Flex pl={5} pr={5} color="black" alignItems="center" bg="#fff">
            <Brand />
            <Box mr="auto" />
            <Box px={0}>
                {items
                    .filter(item => {
                        // NOTE check if private, then return the results of isAuthenticated
                        return item.isPrivate ? isAuthenticated : true
                    })
                    .map((item, index) => (
                        <NavLink key={index} to={item.url}>
                            {item.label}
                        </NavLink>
                    ))}
                <Button>Create Project</Button>
            </Box>
        </Flex>
    )
}

export default NavigationBar
