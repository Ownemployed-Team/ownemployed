import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Layout, Menu } from 'antd'
import logo from '../static/ownemployed_logo.png'

const { Header, Content, Footer } = Layout

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
    <Content style={{ padding: '20px 100px' }}>
      {children}
    </Content>
    <Footer style={{background: '#ffffff', textAlign: 'right'}}>
      <a href="https://euvsvirus.org/">
        <Card size="small" bordered={false}>
          <img alt="euvsvirus hackathon project"
               src="/imgs/Pan-EUHackthron_topbanner-V2.jpg"
               height="62px"/>
          <Card.Meta description="An #EUvsVirus entry"/>
        </Card>
      </a>
    </Footer>
  </Layout>
)

export default PageLayout
