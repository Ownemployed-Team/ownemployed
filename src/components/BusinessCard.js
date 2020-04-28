import React from 'react'
import {Card, Avatar} from 'antd'
import {Link} from "react-router-dom";
import { colors } from '../utils/colors'

const { Meta } = Card

const BusinessCard = ({ business, style }) => {
  let summary = business.tagline || ""
  summary = summary.length < 40 ? summary : (summary.substring(0,40) + "...")
  let avatar = require('../static/avatars/business/default.png')
  try {
      avatar = require(`../static/avatars/business/${business.id}.png`)
  } catch (e) {}
    return (
      <Link to={`/projects/${business.id}`} style={style}>
        <Card
          style={{...{},...style}}
          title={business.name}
          size="small"
        >
        <Meta
            avatar={<Avatar src={avatar}/>}
            description={summary}
            />
            <div
            style={{
                fontSize: '12px',
                color: colors.primaryLight,
                }}
                >
                {business.status ? `Status: ${business.status}` : ''}
                <br/>
                {business.contributors ? `Contributors: ${business.contributors.toString()}` : ''}
            </div>
        </Card>
      </Link>
    )
}

export default BusinessCard