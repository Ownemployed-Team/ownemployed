import * as React from 'react'
import { Typography, Card, Row, Col } from 'antd'
import PageLayout from './PageLayout'

const { Paragraph, Title } = Typography

const Home = () => (
  <PageLayout>
    <div style={{ textAlign: 'center'}}>
      <Title>OWN-EMPLOYED</Title>
      <Paragraph>From unemployed to entrepreneur - own your employment.</Paragraph>
      <Paragraph>We are a networking site helping people like you take control & own your employment.</Paragraph>
      <Paragraph>Find other budding entrepreneurs & start your new business today!</Paragraph>
      <Row gutter={16}>
        <Col span={8}><Card style={{ height: '300px' }}>I have a business idea</Card></Col>
        <Col span={8}><Card style={{ height: '300px' }}>I want to join others with a business idea</Card></Col>
        <Col span={8}><Card style={{ height: '300px' }}>I want to help others with their business idea</Card></Col>
      </Row>
    </div>
  </PageLayout>
)

export default Home