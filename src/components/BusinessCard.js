import React from 'react'
import {Card, Avatar} from 'antd'
import avatar from '../static/avatars/business/Captain_Planet.png'
import {Link} from "react-router-dom";

const { Meta } = Card

const BusinessCard = ({ business, style }) => {
    return (
      <Link to={`/business-profile/${business.id}`}>
        <Card style={{ height: '220px', width: '300px', margin: '8px' }} title={business.name}>
        <Meta
            avatar={<Avatar src={avatar}/>}
            title={business.name}
            description={business.tagline}
            />
            <div
            style={{
                fontSize: '10px',
                borderTop: '1px solid lightgray',
                padding: '8px 24px',
                height: '32px',
                width: '100%',
                position: 'absolute',
                bottom: '10px',
                left: '0px'
                }}
                >
                {business.status || ''}
            </div>
        </Card>
      </Link>
    )
}

export default BusinessCard