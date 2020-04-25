import * as React from 'react'
import { Typography, Row, Col } from 'antd'
import PageLayout from './PageLayout'
import LandingPageCard from './LandingPageCard'

const { Paragraph } = Typography

const Home = () => (
  <PageLayout>
    <div style={{ textAlign: 'center'}}>
      <Paragraph>From unemployed to entrepreneur - own your employment.</Paragraph>
      <Paragraph>We are a networking site helping people like you take control & own your employment.</Paragraph>
      <Paragraph>Find other budding entrepreneurs & start your new business today!</Paragraph>
      <Row gutter={16}>
        <Col span={8}><LandingPageCard text='I have a business idea'/></Col>
        <Col span={8}><LandingPageCard text='I want to join others with a business idea'/></Col>
        <Col span={8}><LandingPageCard text='I want to help others with their business idea'/></Col>
      </Row>
    </div>
  </PageLayout>
)

export default Home