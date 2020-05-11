import React from 'react'
import { Link } from 'components/NavLink'
import { Flex, Box } from 'rebass'
import logo from 'static/ownemployed_logo.png'
import Button from './Button'
import { useAuth0 } from 'react-auth0-spa'


type NavigationItem = {
    label: string
    url: string
    isPrivate?: boolean
    isAuth?: boolean
}

const Brand = () => {
    return (
        <Link to="/">
            <div>
                <img alt="logo" src={logo} width="245px" />
            </div>
        </Link>
    )
}

const NavigationBar = ({ items }: { items: NavigationItem[] }) => {
    const { isAuthenticated } = useAuth0()

    return (
        <div>
            <Flex my={-2} color="black" alignItems="center">
                <Link to="/">
                    <img alt="logo" src={logo} width="245px" />
                </Link>
                <Box mx="auto" />
                {items.map((item, index) => (
                    <Link key={index} to={item.url}>
                        {item.label}
                    </Link>
                ))}
                <Button label="Create Project" />
            </Flex>
        </div>
    )
}

export default NavigationBar
