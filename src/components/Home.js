import * as React from 'react'
import { Typography, Row, Col } from 'antd'
import PageLayout from './PageLayout'
import LandingPageCard from './LandingPageCard'

const { Paragraph, Title} = Typography

const Home = () => (
  <PageLayout>
    <div style={{ textAlign: 'center'}}>
      <Title>Why wait to be employed, when you can be an entrepreneur?</Title>
      <Paragraph>The covid-19 pandemic has led to record levels of unemployment across the world - with many highly skilled people struggling to find an income. On this platform, you can start planning your business or join other people’s projects.</Paragraph>
      <Paragraph>Because why look for employment, when you can create it?</Paragraph>
      <Paragraph>Take the opportunity to start something you are passionate about and eventually make a living out of it!</Paragraph>
      <Row gutter={16}>
        <Col span={8}><LandingPageCard text='I want to start a project' to="/explore-ideas"/></Col>
        <Col span={8}><LandingPageCard text='I want to join others with a business idea' to="/explore-ideas"/></Col>
        <Col span={8}><LandingPageCard text='I want to help others with their business idea' to="/explore-ideas"/></Col>
      </Row>
    </div>
  </PageLayout>
)

export default Home