import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import logo from '../static/ownemployed_logo.png'

const { Header, Content } = Layout

const PageLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ background: '#ffffff', height: '130px', textAlign: 'center' }}>
      <Link to='/'>
        <div><img alt='logo' src={logo} width='245px'/></div>
      </Link>
      <Menu mode='horizontal' theme='light'>
        <Menu.Item><Link to='/members/deborah'>My Site</Link></Menu.Item>
        <Menu.Item><Link to='/projects'>Projects</Link></Menu.Item>
        <Menu.Item><Link to='/members'>Members</Link></Menu.Item>
        <Menu.Item><Link to='/projects/marketingBiz'>Get Inspired!</Link></Menu.Item>
        <Menu.Item>Login/register</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '20px 50px' }}>
      {children}
    </Content>
  </Layout>
)

export default PageLayout
