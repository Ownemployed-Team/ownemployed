import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row, Col } from 'antd'
import logo from 'static/ownemployed_logo.png'

type NavigationItem = {
    label: string
    url: string
}

const NavigationBar = ({ items }: { items: NavigationItem[] }) => {
    return (
        <div>
            <Row>
                <Col span={4}>
                    <Link to="/">
                        <div>
                            <img alt="logo" src={logo} width="245px" />
                        </div>
                    </Link>
                </Col>
                <Col push={12}>
                    <Menu mode="horizontal" theme="light">
                        {items.map((item, index) => (
                            <Menu.Item key={index}>
                                <Link to={item.url}>{item.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default NavigationBar
