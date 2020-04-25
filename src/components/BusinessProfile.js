import * as React from 'react'
import PageLayout from './PageLayout'
import {useParams} from "react-router";

import {Avatar, Button, Card, Col, Descriptions, List, Row} from "antd";
import businesses from "../data/businesses.json";
import users from "../data/users.json";
import TagsCard from "./TagsCard";

const {Meta} = Card;

const BusinessProfile = () => {

    const {businessProfileId} = useParams()
    let business = businesses[businessProfileId];
    let owner = users[business.ownerId]
    return (<PageLayout>
            <div style={{textAlign: 'center'}}>
                <Row gutter={4}>
                    <Col span={12}>
                        <Card>
                            <Descriptions title={business.name} column={1}>
                                <Descriptions.Item label="Owner"><a href={`/user-profile/${owner.id}`}>{owner.name}</a></Descriptions.Item>
                                <Descriptions.Item label="Summary">{business.tagline}</Descriptions.Item>
                            </Descriptions>
                        </Card>
                        <Card title="Value Proposition">{business.valueProposition}</Card>
                        <Card><Button>Want to Join?</Button></Card>
                        <Card><Button>Offer Mentoring</Button></Card>
                        <Card><Button>Follow</Button></Card>
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
            </div>
        </PageLayout>
    )
}

export default BusinessProfile