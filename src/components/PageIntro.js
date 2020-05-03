import React from 'react'
import { Typography, Button } from 'antd'

const { Title, Paragraph } = Typography

const PageIntro = ({ title, summary, actions }) => (
  <div style={{ textAlign: 'center', paddingBottom: '16px' }}>
    <Title level={3}>{title}</Title>
    <Paragraph>
      {summary}
    </Paragraph>
    {(actions || []).map(({ text, onClick }, i) => <Button key={i} onClick={onClick} style={{ margin: '0 8px' }}>{text}</Button>)}
  </div>
)

export default PageIntro