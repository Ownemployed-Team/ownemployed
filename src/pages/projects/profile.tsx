import * as React from 'react'
import PageLayout from 'components/PageLayout'
import Card from 'components/Card'
import Text from 'components/Text'
import { useParams } from 'react-router-dom'
import { Box, Flex, Image } from 'rebass'
import projects from 'data/projects.json'
import users from 'data/users.json'
import TagsCard from 'components/TagsCard'
import UserCard_Legacy from 'components/UserCard_Legacy'
import PageIntro from 'components/PageIntro'

const ProjectProfile = ({ match }) => {
    const { businessProfileId } = (match || {}).params || {}
    const project = projects[businessProfileId]
    const {
        id,
        name,
        status,
        contributors,
        tagline,
        description,
        keyActivities,
        channels,
    } = project
    // const owners = ownerIds
    //     .map(ownedId => users[ownedId])
    //     .filter(x => x !== undefined)
    // let image = require('static/imgs/businesses/default.jpg')
    // try {
    //     image = require(`static/imgs/businesses/${project.id}.png`)
    // } catch (e) {}
    // const linkRenderer = key =>
    //     '/projects?selected=' + encodeURIComponent(JSON.stringify([key]))
    return (
        <PageLayout>
            <Flex>
                <Box width={[2 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            m: 2,
                            p: 0,
                        }}
                    >
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text as="h2">{name}</Text>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim ...
                            </Text>
                            <Box
                                sx={{
                                    pb: 2,
                                }}
                            >
                                {keyActivities &&
                                    keyActivities.map(keyActivity => (
                                        <Text
                                            sx={{
                                                mr: 1,
                                                p: 2,
                                                borderRadius: '2px',
                                                display: 'inline',
                                                bg: '#124780',
                                                color: 'white',
                                                fontSize: '10px',
                                            }}
                                        >
                                            {keyActivity}
                                        </Text>
                                    ))}
                            </Box>
                        </Box>
                    </Card>
                </Box>
                <Box width={[1 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            m: 2,
                            p: 0,
                        }}
                    >
                        <Box
                            sx={{
                                borderBottom: '1px solid',
                                p: 2,
                            }}
                        >
                            <Text
                                sx={{
                                    color: '#124780',
                                }}
                            >
                                Something
                            </Text>
                        </Box>
                    </Card>
                </Box>
            </Flex>
            <Flex>
                <Box width={[2 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            m: 2,
                            p: 0,
                        }}
                    >
                        <Box
                            sx={{
                                borderBottom: '1px solid',
                                p: 4,
                                pb: 3,
                            }}
                        >
                            <Text
                                sx={{
                                    color: '#124780',
                                }}
                            >
                                About the project
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    my: 2,
                                }}
                            >
                                <Text as="h3">Description</Text>
                                <Text>{description}</Text>
                            </Box>
                            <Box
                                sx={{
                                    my: 4,
                                }}
                            >
                                <Text as="h3">Project status</Text>
                                <Text>{status}</Text>
                            </Box>
                            <Box
                                sx={{
                                    my: 4,
                                }}
                            >
                                <Text as="h3">Useful Links</Text>
                                <Text>{'Need data from Daniel'}</Text>
                            </Box>
                            <Box
                                sx={{
                                    my: 4,
                                }}
                            >
                                <Text as="h3">Skills needed</Text>
                                <Text>{'Need data from Daniel'}</Text>
                            </Box>
                        </Box>
                    </Card>
                </Box>
                <Box width={[1 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            m: 2,
                            p: 0,
                        }}
                    >
                        <Box
                            sx={{
                                borderBottom: '1px solid',
                                p: 4,
                                pb: 3,
                            }}
                        >
                            <Text
                                sx={{
                                    color: '#124780',
                                }}
                            >
                                Team Members
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Flex flexWrap="wrap">
                                {[1, 2, 3, 4].map(() => (
                                    <Box width={[1 / 2]} sx={{ my: 2 }}>
                                        <Image src="/imgs/illustrations/mentor.svg"></Image>
                                        <Text
                                            as="body"
                                            sx={{ textAlign: 'center' }}
                                        >
                                            title
                                        </Text>
                                        <Text sx={{ textAlign: 'center' }}>
                                            First name Last name
                                        </Text>
                                        <Flex
                                            sx={{
                                                justifyContent: 'space-around',
                                            }}
                                        >
                                            <Box>
                                                <Image
                                                    width="30px"
                                                    src="/imgs/social-media/linkedin.svg"
                                                ></Image>
                                            </Box>
                                            <Box>
                                                <Image
                                                    width="30px"
                                                    src="/imgs/social-media/facebook.svg"
                                                ></Image>
                                            </Box>
                                        </Flex>
                                    </Box>
                                ))}
                            </Flex>
                        </Box>
                    </Card>
                </Box>
            </Flex>
        </PageLayout>
    )
}

export default ProjectProfile
