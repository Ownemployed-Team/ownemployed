import * as React from 'react'
import { Typography, Row, Col } from 'antd'
import PageLayout from './PageLayout'
import LandingPageCard from './LandingPageCard'
import { colors } from '../utils/colors'
import { homepage } from '../data/content.json'

const { Paragraph, Title} = Typography
const { title, p1, p2, p3, box1, box2, box3 } = homepage

const Home = () => (
  <PageLayout style={{ textAlign: 'center'}}>

      <Title style={{ color: colors.primaryLight }}>{title}</Title>
      <Paragraph style={{ fontSize: '18px', fontStyle: 'italic' }}>{p1}</Paragraph>
      <Paragraph style={{ fontSize: '18px', fontStyle: 'italic' }}>{p2}</Paragraph>
      <Paragraph style={{ fontSize: '18px', fontStyle: 'italic', color: colors.primaryDark, fontWeight: '600' }}>{p3}</Paragraph>
      <Row  justify="space-around" align="middle" gutter={16}>
        <Col xs={20} sm={16} md={12} lg={8} xl={6}><LandingPageCard style={{ textAlign: 'center'}} text={box1} to="/projects"/></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6}><LandingPageCard style={{ textAlign: 'center'}} text={box2} to="/projects"/></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6}><LandingPageCard style={{ textAlign: 'center'}} text={box3} to="/projects"/></Col>
      </Row>

  </PageLayout>
)

export default Home