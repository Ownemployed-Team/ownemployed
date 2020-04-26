import React from 'react'
import {Typography, Card} from 'antd'
import {Link} from "react-router-dom";

const {Paragraph} = Typography

const LandingPageCard = ({text, to}) => (
  <Link to={to}>
    <Card
      bodyStyle={{display: 'flex', alignItems: 'center', height: '300px'}}
      style={{height: '300px'}}
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
  </Link>
)

export default LandingPageCard
