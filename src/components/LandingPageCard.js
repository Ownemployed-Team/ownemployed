import React from 'react'
import {Typography, Card} from 'antd'
import {Link} from "react-router-dom";
import { colors } from '../utils/colors'

const {Paragraph} = Typography

const LandingPageCard = ({text, to}) => (
  <Link to={to}>
    <Card
      bodyStyle={{display: 'flex', alignItems: 'center', height: '300px'}}
      style={{height: '300px', borderRadius: '10px', boxShadow: '4px 2px 10px lightgray', margin: '16px'}}
    >
      <Paragraph
        style={{
          margin: 'auto',
          fontSize: '18px',
          color: colors.primaryLight,
          fontWeight: '600'
        }}
      >{text}
      </Paragraph>
    </Card>
  </Link>
)

export default LandingPageCard
