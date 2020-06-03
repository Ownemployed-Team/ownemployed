import * as React from 'react'

import { useQuery } from '@apollo/react-hooks'
import GET_PROJECT from 'graphql/get-project'

import Card from 'components/Card'
import Text from 'components/Text'
import { useParams } from 'react-router-dom'
import { Box, Flex, Image } from 'rebass'

const ProjectProfile = ({ match }) => {
    const { projectProfileId } = useParams()
    const result = useQuery(GET_PROJECT, {
        variables: {
            projectId: projectProfileId,
        },
    })
    const { loading, called, data = {} } = result
    const project = data.getProject || []

    if (called && loading) {
        return (
            <>
                <Text> Loading </Text>
            </>
        )
    }

    const {
        id,
        name,
        creationDate,
        ownerID,
        status,
        contributors,
        tagline,
        description,
        keyActivities,
        channels,
    } = project

    return (
        <>
            <Box display={['block', 'block', 'flex']}>
                <Box width={[1, 1, 2 / 3]}>
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
                <Box width={[1, 1, 1 / 3]}>
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
            </Box>
            <Box display={['block', 'block', 'flex']}>
                <Box width={[1, 1, 2 / 3]}>
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
                <Box width={[1, 1, 1 / 3]}>
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
            </Box>
        </>
    )
}

export default ProjectProfile
