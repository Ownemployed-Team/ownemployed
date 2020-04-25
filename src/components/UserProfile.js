import * as React from 'react'
import {Avatar, Card, Col, List, Row, Typography, Descriptions, Button} from 'antd'
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
        ownedModels: [{
            name: "Marketing Biz",
            summary: "All in one marketing"
        }

        ],
        connectedModels: [{
            name: "Linda's Marketing",
            summary: "Marketing on the move"
        }],

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
                                header={<div>Deborah's founding</div>}
                                itemLayout="horizontal"
                                dataSource={profile.ownedModels}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                            title={<a href="/business-profile">{item.name}</a>}
                                            description={item.summary}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                        <Card>
                            <List
                                header={<div>Deborah's connected to</div>}
                                itemLayout="horizontal"
                                dataSource={profile.connectedModels}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                            title={<a href="/business-profile">{item.name}</a>}
                                            description={item.summary}
                                        />
                                    </List.Item>
                                )}
                            />
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