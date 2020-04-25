import React from 'react'
import { Typography, Card } from 'antd'

const { Paragraph } = Typography

const LandingPageCard = ({ text }) => (
  <Card
    bodyStyle={{ display: 'flex', alignItems: 'center', height: '300px' }}
    style={{ height: '300px' }}
    >
    <Paragraph
      style={{
        margin: 'auto',
        fontSize: '18px',
        fontWeight: '600'
      }}
      >{text}
    </Paragraph>
  </Card>
)

export default LandingPageCard
