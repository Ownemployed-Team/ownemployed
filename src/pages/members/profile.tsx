import * as React from 'react'
import PageLayout from 'components/PageLayout'
import Card from 'components/Card'
import ProjectCard from 'components/ProjectCard'
import Text from 'components/Text'
import { useParams } from 'react-router-dom'
import { Box, Flex, Image } from 'rebass'
import members from 'data/members.json'
import users from 'data/users.json'
import TagsCard from 'components/TagsCard'
import UserCard_Legacy from 'components/UserCard_Legacy'
import PageIntro from 'components/PageIntro'
import { AutoComplete } from 'antd'

const MemberProfile = ({ match }) => {
    const { memberProfileId } = (match || {}).params || {}
    const member = members[memberProfileId]
    const {
        id,
        name,
        email,
        signupDate,
        socialMedia,
        interests,
        lookingFor,
        skills,
        education,
        location,
        projects,
    } = member
    // const owners = ownerIds
    //     .map(ownedId => users[ownedId])
    //     .filter(x => x !== undefined)
    // let image = require('static/imgs/businesses/default.jpg')
    // try {
    //     image = require(`static/imgs/businesses/${project.id}.png`)
    // } catch (e) {}
    // const linkRenderer = key =>
    //     '/projects?selected=' + encodeURIComponent(JSON.stringify([key]))

    const { url: facebookUrl } =
        (socialMedia || []).find(
            socialObject => socialObject.name === 'Facebook'
        ) || {}
    const { url: instagramUrl } =
        (socialMedia || []).find(
            socialObject => socialObject.name === 'Instagram'
        ) || {}
    return (
        <PageLayout>
            <Flex>
                <Box width={[1 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
                        }}
                    >
                        <Box sx={{ p: 4, borderBottom: '1px solid' }}>
                            <Box sx={{ my: 2 }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        margin: 'auto',
                                        background: 'black',
                                    }}
                                >
                                    <Image
                                        sx={{
                                            minWidth: '100%',
                                            minHeight: '100%',
                                            width: 'auto',
                                            height: 'auto',
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                        src="/imgs/illustrations/mentor.svg"
                                    />
                                </Box>
                                <Text as="body" sx={{ textAlign: 'center' }}>
                                    title
                                </Text>
                                <Text sx={{ textAlign: 'center' }}>
                                    First name Last name
                                </Text>
                                <Text>{location}</Text>
                            </Box>
                        </Box>
                        <Box sx={{ p: 4 }}>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Website</Text>
                                <Text as="body">{'website'}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">LinkedIn</Text>
                                <Text as="body">{'linkedIn'}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Facebook</Text>
                                <Text as="body">{facebookUrl}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Instagram</Text>
                                <Text as="body">{instagramUrl}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Email</Text>
                                <Text as="body">{email}</Text>
                            </Box>
                        </Box>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
                        }}
                    >
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text as="h3">Seeking</Text>
                            {lookingFor &&
                                lookingFor.map(lookingForItem => (
                                    <Text
                                        key={lookingForItem}
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
                                        {lookingForItem}
                                    </Text>
                                ))}
                        </Box>
                    </Card>
                </Box>
                <Box width={[2 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
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
                                About
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim ...
                            </Text>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Skills</Text>
                                {skills &&
                                    skills.map(skill => (
                                        <Text
                                            key={skill}
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
                                            {skill}
                                        </Text>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Sector</Text>
                                {lookingFor &&
                                    lookingFor.map(lookingForItem => (
                                        <Text
                                            key={lookingForItem}
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
                                            {lookingForItem}
                                        </Text>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="h3">Education</Text>
                                <Text as="body">{education}</Text>
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Interests</Text>
                                {interests &&
                                    interests.map(interest => (
                                        <Text
                                            key={interest}
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
                                            {interest}
                                        </Text>
                                    ))}
                            </Box>
                        </Box>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
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
                                Projects
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Flex flexWrap="wrap">
                                {projects &&
                                    projects.map(project => (
                                        <Box
                                            width={[1 / 2]}
                                            sx={{
                                                my: 2,
                                                p: 3,
                                            }}
                                        >
                                            <ProjectCard project={project} />
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

export default MemberProfile
