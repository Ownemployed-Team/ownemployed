import * as React from 'react'
import PageLayout from './PageLayout'
import { useParams } from 'react-router'

import { Card, Col, Row, Descriptions } from 'antd'
import businesses from '../data/businesses.json'
import users from '../data/users.json'
import TagsCard from './TagsCard'
import UserCard_Legacy from './UserCard_Legacy'
import PageIntro from './PageIntro'

const BusinessProfile = () => {
    const { businessProfileId } = useParams()
    const business = businesses[businessProfileId]
    const ownerIds = business.ownerId || []
    const owners = ownerIds
        .map(ownedId => users[ownedId])
        .filter(x => x !== undefined)
    let image = require('../static/imgs/businesses/default.jpg')
    try {
        image = require(`../static/imgs/businesses/${business.id}.png`)
    } catch (e) {}
    const linkRenderer = key =>
        '/projects?selected=' + encodeURIComponent(JSON.stringify([key]))
    return (
        <PageLayout>
            <PageIntro
                title={business.name || ''}
                summary={business.tagline || ''}
                actions={[
                    { text: 'Want to Join?', onClick: () => {} },
                    { text: 'Offer Mentoring', onClick: () => {} },
                    { text: 'Follow', onClick: () => {} },
                ]}
            />
            <Row gutter={16}>
                <Col md={24} lg={12}>
                    <Card cover={<img alt="business" src={image} />}>
                        <Descriptions column={1}>
                            {business.valueProposition && (
                                <Descriptions.Item label="Value Proposition">
                                    {business.valueProposition || ''}
                                </Descriptions.Item>
                            )}
                            {owners.length > 0 && (
                                <Descriptions.Item label="Founder">
                                    {owners.map(owner => (
                                        <UserCard_Legacy
                                            key={owner.id}
                                            user={owner}
                                        />
                                    ))}
                                </Descriptions.Item>
                            )}
                        </Descriptions>
                    </Card>
                </Col>
                <Col md={24} lg={12}>
                    <TagsCard
                        title="Key Activities"
                        tags={business.keyActivities}
                        linkRenderer={linkRenderer}
                    />
                    <TagsCard
                        title="Key Resources"
                        tags={business.keyResources}
                        linkRenderer={linkRenderer}
                    />
                    <TagsCard
                        title="Customer Relationships"
                        tags={business.customerRelationships}
                        linkRenderer={linkRenderer}
                    />
                    <TagsCard
                        title="Channels"
                        tags={business.channels}
                        linkRenderer={linkRenderer}
                    />
                    <TagsCard
                        title="Customer Segments"
                        tags={business.customerSegments}
                        linkRenderer={linkRenderer}
                    />

                    <TagsCard
                        title="Cost Structure"
                        tags={business.costStructure}
                        linkRenderer={linkRenderer}
                    />
                    <TagsCard
                        title="Revenue Stream"
                        tags={business.revenueStream}
                        linkRenderer={linkRenderer}
                    />
                    <TagsCard
                        title="Key Partners"
                        tags={business.keyPartners}
                        linkRenderer={linkRenderer}
                    />
                </Col>
            </Row>
        </PageLayout>
    )
}

export default BusinessProfile
