import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row, Col } from 'antd'
import logo from 'static/ownemployed_logo.png'
import { useAuth0 } from 'react-auth0-spa'

type NavigationItem = {
    label: string
    url: string
    isPrivate?: boolean
    isAuth?: boolean
}

const MenuItem = ({ item, ...props }) => {
    const { url, label, isAuth } = item
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    if (isAuth) {
        return (
            <Menu.Item
                onClick={() => {
                    isAuthenticated ? logout() : loginWithRedirect({})
                }}
                {...props}
            >
                {isAuthenticated ? 'Log out' : 'Log in'}
            </Menu.Item>
        )
    }

    return (
        <Menu.Item {...props}>
            <Link to={url}>{label}</Link>
        </Menu.Item>
    )
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
            <Row>
                <Col span={4}>
                    <Brand />
                </Col>
                <Col push={12}>
                    <Menu mode="horizontal" theme="light">
                        {items
                            .filter(item =>
                                // NOTE: if item is private then return the result of isAuthenticated (to see if the user has access)
                                // else keep rendering the route
                                item.isPrivate ? isAuthenticated : true
                            )
                            .map((item, index) => (
                                <MenuItem key={index} item={item} />
                            ))}
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default NavigationBar
