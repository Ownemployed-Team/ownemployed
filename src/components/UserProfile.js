import * as React from 'react'
import {Avatar, Card, Col, List, Row,     Descriptions, Button} from 'antd'
import PageLayout from './PageLayout'
import {useParams} from "react-router";

const {Meta} = Card;

export const profiles = {
    deborah: {
        name: "Deborah",
        summary: "Experienced Marketing Manager with entrepreneurial pitch solving problems for flower shops",
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
        interests: ["Sustainability", "Blockchain", "Volunteering"],
        lookingFor: ["Business Networking", "Product Launch"],
        skills: ["Brand Management", "Product Launch"],
        location: "Copenhagon, Denmark",
        education: "Msc Logistics and Supply Chain, Aarhus University"

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
                                dataSource={profile.lookingFor}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                        <Card>
                            <Descriptions title="User Info" column={1}>
                                <Descriptions.Item label="Location">{profile.location}</Descriptions.Item>
                                <Descriptions.Item label="Summary">{profile.summary}</Descriptions.Item>
                                <Descriptions.Item label="Education">{profile.education}</Descriptions.Item>
                            </Descriptions>,
                        </Card>
                        <Card>
                            <List
                                header="Skills"
                                dataSource={profile.skills}
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
                                dataSource={profile.interests}
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