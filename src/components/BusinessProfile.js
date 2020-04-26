import * as React from 'react'
import PageLayout from './PageLayout'
import {useParams} from "react-router";

import { Card, Col, Row} from "antd";
import businesses from "../data/businesses.json";
import users from "../data/users.json";
import TagsCard from "./TagsCard";
import BusinessCard from "./BusinessCard";
import UserCard from "./UserCard";
import PageIntro from "./PageIntro"



const BusinessProfile = () => {

    const {businessProfileId} = useParams()
    let business = businesses[businessProfileId];
    let owner = users[business.ownerId]
    return (<PageLayout>
                <PageIntro
                    title={business.name}
                    summary={business.tagline || ''}
                    actions={[
                        { text: "Want to Join?", onClick: () => {}},
                        { text: "Offer Mentoring", onClick: () => {}},
                        { text: "Follow", onClick: () => {}},
                    ]}
                    />
                <Row gutter={4}>
                    <Col span={12}>
                        <BusinessCard business={business}/>
                        <UserCard user={owner} />
                        <Card title="Value Proposition">{business.valueProposition}</Card>
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