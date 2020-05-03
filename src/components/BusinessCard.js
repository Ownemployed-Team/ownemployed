import React from 'react'
import {Card, Avatar} from 'antd'
import {Link} from "react-router-dom";
import { colors } from '../utils/colors'

const { Meta } = Card

const BusinessCard = ({ business, style }) => {
  let avatar = require('../static/avatars/business/default.png')
  try {
      avatar = require(`../static/avatars/business/${business.id}.png`)
  } catch (e) {}
    return (
      <Link to={`/projects/${business.id}`}>
        <Card style={{ height: '220px', width: '300px', margin: '8px' }} title={business.name}>
        <Meta
            avatar={<Avatar src={avatar}/>}
            title={business.name}
            description={business.tagline}
            />
            <div
            style={{
                fontSize: '12px',
                color: colors.primaryLight,
                padding: '8px 24px',
                position: 'absolute',
                bottom: '10px',
                left: '0px'
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