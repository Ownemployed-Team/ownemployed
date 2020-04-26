import * as React from 'react'
import { Typography, Row, Col } from 'antd'
import PageLayout from './PageLayout'
import LandingPageCard from './LandingPageCard'
import { colors } from '../utils/colors'
import { homepage } from '../data/content.json'

const { Paragraph, Title} = Typography
const { title, p1, p2, p3, box1, box2, box3 } = homepage

const Home = () => (
  <PageLayout>
    <div style={{ textAlign: 'center'}}>
      <Title style={{ color: colors.primaryLight }}>{title}</Title>
      <Paragraph style={{ fontSize: '18px', fontStyle: 'italic' }}>{p1}</Paragraph>
      <Paragraph style={{ fontSize: '18px', fontStyle: 'italic' }}>{p2}</Paragraph>
      <Paragraph style={{ fontSize: '18px', fontStyle: 'italic', color: colors.primaryDark, fontWeight: '600' }}>{p3}</Paragraph>
      <Row gutter={16}>
        <Col span={8}><LandingPageCard text={box1} to="/projects"/></Col>
        <Col span={8}><LandingPageCard text={box2} to="/projects"/></Col>
        <Col span={8}><LandingPageCard text={box3} to="/projects"/></Col>
      </Row>
    </div>
  </PageLayout>
)

export default Home