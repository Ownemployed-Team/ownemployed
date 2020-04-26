import * as React from 'react'
import PageLayout from './PageLayout'
import {useParams} from "react-router";

import { Card, Col, Row, Descriptions } from "antd";
import businesses from "../data/businesses.json";
import users from "../data/users.json";
import TagsCard from "./TagsCard";
import BusinessCard from "./BusinessCard";
import UserCard from "./UserCard";
import PageIntro from "./PageIntro"



const BusinessProfile = () => {

    const {businessProfileId} = useParams()
    const business = businesses[businessProfileId];
    const owner = users[business.ownerId]
    let image = require('../static/imgs/businesses/default.jpg')
    try {
        image = require(`../static/imgs/businesses/${business.id}.png`)
    } catch (e) {}

    return (<PageLayout>
                <PageIntro
                    title={business.name || ''}
                    summary={business.tagline || ''}
                    actions={[
                        { text: "Want to Join?", onClick: () => {}},
                        { text: "Offer Mentoring", onClick: () => {}},
                        { text: "Follow", onClick: () => {}},
                    ]}
                    />
                <Row gutter={4}>
                    <Col span={12}>
                        <Card cover={<img alt='business' src={image}/>}>
                            <Descriptions  column={1}>
                                {business.valueProposition &&
                                    <Descriptions.Item label="Value Proposition">{business.valueProposition || ''}</Descriptions.Item>
                                }
                                {owner &&
                                    <Descriptions.Item label="Founder"><UserCard user={owner} /></Descriptions.Item>
                                }
                            </Descriptions>
                        </Card>
                        
                    </Col>
                    <Col span={12}>
                        <TagsCard
                            title="Key Activities"
                            tags={business.keyActivities}
                        />
                        <TagsCard
                            title="Key Resources"
                            tags={business.keyResources}
                        />
                        <TagsCard
                            title="Customer Relationships"
                            tags={business.customerRelationships}
                        />
                        <TagsCard
                            title="Channels"
                            tags={business.channels}
                        />
                        <TagsCard
                            title="Customer Segments"
                            tags={business.customerSegments}
                        />

                        <TagsCard
                            title="Cost Structure"
                            tags={business.costStructure}
                        />
                        <TagsCard
                            title="Revenue Stream"
                            tags={business.revenueStream}
                        />
                        <TagsCard
                            title="Key Partners"
                            tags={business.keyPartners}
                        />
                    </Col>
                </Row>
        </PageLayout>
    )
}

export default BusinessProfile