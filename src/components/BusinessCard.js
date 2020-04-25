import React from 'react'
import {Card, Avatar} from 'antd'
import avatar from '../static/avatars/business/Captain_Planet.png'

const { Meta } = Card

let defaultStyle={ textAlign: 'center' }
const BusinessCard = ({ business, style }) => {
    let businessStatus = business.status && business.status === 'open'
        ? 'Open for collaborators'
        : 'Closed';
    return (
        <Card style={{...defaultStyle,...style}}  >
            <Card>
                <Meta
                    avatar={<Avatar src={avatar}/>}
                    title={business.name}

                />
            </Card>
            <Card bordered={false}>
                {business.tagline}
            </Card>
            <Card size="small" bordered={false}>
                {businessStatus}
            </Card>
        </Card>
    )
}

export default BusinessCard