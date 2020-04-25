import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import logo from '../static/ownemployed_logo.png'

const { Header, Content } = Layout

const PageLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ background: '#ffffff', height: '130px' }}>
      <div style={{ textAlign: 'center' }}><img alt='logo' src={logo} width='245px'/></div>
      <Menu mode='horizontal' theme='light'>
        <Menu.Item><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item><Link to='/business-profile'>Business Profile</Link></Menu.Item>
        <Menu.Item><Link to='/user-profile'>User Profile</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '20px 50px' }}>
      {children}
    </Content>
  </Layout>
)

export default PageLayout
