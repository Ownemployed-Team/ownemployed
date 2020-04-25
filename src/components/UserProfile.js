import * as React from 'react'
import { Card, Col, Row,    Descriptions, Button} from 'antd'
import PageLayout from './PageLayout'
import profiles from '../data/users.json'
import businesses from '../data/businesses.json'

import {useParams} from "react-router";
import TagsCard from "./TagsCard";
import BusinessCard from "./BusinessCard";
import UserCard from "./UserCard";

const UserProfile = () => {

    const {userProfileId} = useParams()
    let profile = profiles[userProfileId];

    return (<PageLayout>
            <div style={{textAlign: 'center'}}>
                <Row gutter={4}>
                    <Col span={12}>
                        <UserCard user={profile}/>

                        <Card>
                            <Descriptions  column={1}>
                                <Descriptions.Item label="Location">{profile.location}</Descriptions.Item>
                                <Descriptions.Item label="Education">{profile.education}</Descriptions.Item>
                            </Descriptions>,
                        </Card>
                        <Row gutter={4}>
                            {Object.keys(profile.socialMedia).map(k =>
                                <Col span={4}>
                                    <a href={profile.socialMedia[k]}>
                                        <img alt={k} src={`/imgs/social-media/${k}.svg`}/></a>
                                </Col>
                            )}

                        </Row>


                    </Col>
                    <Col span={12}>


                        <TagsCard
                            title="Seeking"
                            tags={profile.lookingFor}
                        />
                        <TagsCard
                            title="Skills"
                            tags={profile.skills}
                        />
                        <TagsCard
                            title="Interests"
                            tags={profile.interests}
                        />

                        <Card title="Founding">
                            {profile.ownedModels.map(businessId => businesses[businessId]).map((business) => (<BusinessCard business={business}/>))}
                        </Card>
                        <Card title="Connected">
                            {profile.connectedModels.map(businessId => businesses[businessId]).map((business) => (<BusinessCard business={business}/>))}
                        </Card>

                        <Card>
                            <Button>Connect</Button>
                        </Card>

                    </Col>

                </Row>


            </div>
        </PageLayout>
    )
}

export default UserProfile