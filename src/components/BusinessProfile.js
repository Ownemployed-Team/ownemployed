import * as React from 'react'
import PageLayout from './PageLayout'
import {useParams} from "react-router";

import {Avatar, Button, Card, Col, Descriptions, List, Row} from "antd";
import businesses from "../data/businesses.json";
import users from "../data/users.json";

const {Meta} = Card;

const BusinessProfile = () => {

    const {businessProfileId} = useParams()
    let business = businesses[businessProfileId];
    let owner = users[business.ownerId]
    return (<PageLayout>
            <div style={{textAlign: 'center'}}>
                <Row gutter={4}>
                    <Col span={12}>
                        <Card>Name: {business.name}</Card>
                        <Card>Owner: {owner.name}</Card>
                        <Card>Summary: {business.tagline}</Card>
                    </Col>
                    <Col span={12}>
                        <Card>Key activities:
                        </Card>
                        <Card>
                            Key resources:
                        </Card>
                        <Card>
                            Value proposition
                        </Card>
                        <Card>
                            Customer relationships:
                        </Card>
                        <Card>
                            Channels:
                        </Card>
                        <Card>
                            Customer segments:
                        </Card>
                        <Card>
                            Cost structure:
                        </Card>
                        <Card>
                            Revenue stream:
                        </Card>
                    </Col>
                </Row>
            </div>
        </PageLayout>
    )
}

export default BusinessProfile