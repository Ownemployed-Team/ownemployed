import React from 'react'
import { Card, Layout } from 'antd'
import NavigationBar from './NavigationBar'

const { Header, Content, Footer } = Layout

const menuItems = [
    { label: 'My Site', url: '/members/deborah' },
    { label: 'Projects', url: '/projects' },
    { label: 'Members', url: '/members' },
    { label: 'Get Inspired', url: '/projects/marketingBiz' },
    { label: 'Login/Register', url: '/auth', isAuth: true },
]

const PageLayout = ({ children }) => (
    <Layout style={{ minHeight: '100vh' }}>
        <Header
            style={{
                background: '#ffffff',
                height: '130px',
                textAlign: 'center',
            }}
        >
            <NavigationBar items={menuItems} />
        </Header>
        <Content style={{ padding: '20px 100px' }}>{children}</Content>
        <Footer style={{ background: '#ffffff', textAlign: 'right' }}>
            <a href="https://euvsvirus.org/">
                <Card size="small" bordered={false}>
                    <img
                        alt="euvsvirus hackathon project"
                        src="/imgs/Pan-EUHackthron_topbanner-V2.jpg"
                        height="62px"
                    />
                    <Card.Meta description="An #EUvsVirus entry" />
                </Card>
            </a>
        </Footer>
    </Layout>
)

export default PageLayout
