import * as React from 'react'
import { Card, Col, Row,    Descriptions, Button} from 'antd'
import PageLayout from './PageLayout'
import profiles from '../data/users.json'
import businesses from '../data/businesses.json'

import {useParams} from "react-router";
import TagsCard from "./TagsCard";
import BusinessCard from "./BusinessCard";
import PageIntro from "./PageIntro";

const UserProfile = () => {

    const {userProfileId} = useParams()
    let user = profiles[userProfileId];
    let image = require('../static/imgs/users/default.png')
    try {
        image = require(`../static/imgs/users/${user.id}.png`)
    } catch (e) {}

    return (
        <PageLayout>
            <PageIntro
                title={user.name || ''}
                summary={user.summary || ''}
                actions={[{ text: "Connect", onClick: () => {}}]}
                />
            <div>
                <Row gutter={4}>
                    <Col span={12}>
                        <Card
                            cover={<img alt='member' src={image}/>}
                                >
                            <Descriptions  column={1}>
                                <Descriptions.Item label="Location">{user.location || ''}</Descriptions.Item>
                                <Descriptions.Item label="Education">{user.education || ''}</Descriptions.Item>
                            </Descriptions>
                        </Card>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                            {Object.keys(user.socialMedia || {}).map(k =>
                                  <a href={user.socialMedia[k]}>
                                      <img alt={k} src={`/imgs/social-media/${k}.svg`} style={{height: "72px", padding:"7px"}}/>
                                  </a>
                            )}
                        </div>
                    </Col>
                    <Col span={12}>
                        <TagsCard
                            title="Seeking"
                            tags={user.lookingFor}
                        />
                        <TagsCard
                            title="Skills"
                            tags={user.skills}
                        />
                        <TagsCard
                            title="Interests"
                            tags={user.interests}
                        />
                        {user.ownedModels && Array.isArray(user.ownedModels) &&
                            <Card title="Founding">
                                {(user.ownedModels || []).map(businessId => businesses[businessId])
                                    .filter(Boolean)
                                    .map((business) => (<BusinessCard business={business}/>))}
                            </Card>
                        }
                        {user.connectedModels && Array.isArray(user.connectedModels) &&
                            <Card title="Connected">
                                {(user.connectedModels || []).map(businessId => businesses[businessId])
                                    .filter(Boolean)
                                    .map((business) => (<BusinessCard business={business}/>))
                                }
                            </Card>
                        }
                   </Col>
                </Row>
            </div>
        </PageLayout>
    )
}

export default UserProfile