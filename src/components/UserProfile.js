import * as React from 'react'
import {Avatar, Card, Col, List, Row, Typography, Descriptions} from 'antd'
import PageLayout from './PageLayout'
import {useParams} from "react-router";

const {Meta} = Card;

export const profiles = {
    deborah: {
        name: "Deborah",
        summary: "Marketing Manager",
        socialMedia: {
            "facebook": "https://facebook.com",
            "linkedin": "https://linkedin.com",
        },
        ownedModels: [
            "Project X"
        ],
        connectedModels: [
            "Project Y"
        ]

    },
}

const socialMediaText = {
    "facebook": {
        "name": "Facebook",
        "connectionType": "Friend"
    },
    "linkedin": {
        "name": "LinkedIn",
        "connectionType": "Connect"
    },
}


const UserProfile = () => {

    const {userProfileId} = useParams()
    let profile = profiles[userProfileId];

    return (<PageLayout>
            <div style={{textAlign: 'center'}}>
                <Row gutter={4}>
                    <Col span={12}>
                        <Card
                            cover={<img alt={profile.name} src={`/imgs/users/${userProfileId}.png`}/>}>
                            <Meta title={profile.name} description={profile.summary}/>
                        </Card>
                        <Row gutter={4}>
                            {Object.keys(profile.socialMedia).map(k =>
                                <Col span={4}>
                                    <a href={profile.socialMedia[k]}>
                                        <img alt={k} src={`/imgs/social-media/${k}.svg`}/></a>
                                </Col>
                            )}

                        </Row>
                        <Card>
                            <List
                                header="Looking for"
                                dataSource={["Business Networking", "Product Launch"]}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                        <Card>
                            <Descriptions title="User Info" column={1}>
                                <Descriptions.Item label="Location">Copenhagon, Denmark</Descriptions.Item>
                                <Descriptions.Item label="Summary">Experienced Marketing Manager with entrepreneurial
                                    itch solving problems for flower shops</Descriptions.Item>
                                <Descriptions.Item label="Education">Msc Logistics and Supply Chain, Aarhus
                                    University</Descriptions.Item>
                            </Descriptions>,
                        </Card>
                        <Card>
                            <List
                                header="Skills"
                                dataSource={["Brand Management", "Product Launch"]}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Card>

                        <Card>
                            <List
                                header="Interests"
                                dataSource={["Sustainability", "Blockchain", "Volunteering"]}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>


                        <Card>
                            <List
                                header={<div>Business model projects</div>}
                                itemLayout="horizontal"
                                dataSource={[
                                    {
                                        title: 'Marketing Biz',
                                        description: "All in one marketing solution"
                                    }
                                ]}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                            title={<a href="/business-profile">{item.title}</a>}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                        <Card>
                            Deborah's activity
                        </Card>
                        <Card>
                            Deborah's activity
                        </Card>



                    </Col>

                </Row>


            </div>
        </PageLayout>
    )
}

export default UserProfile