import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'
import { Box, Flex, Image } from 'rebass'
import { Label } from '@rebass/forms'
// Avatar as RebassAvatar,
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { UniqueInputFieldNamesRule } from 'graphql'

const ProjectCard = ({ project }) => {
    const {
        description,
        id,
        name,
        picture,
        sectors,
        shortDescription,
        skillsRequired,
    } = project

    // TODO : wait till cloudinary images is in database and use picture instead of hardcoded image.
    const avatar =
        'https://res.cloudinary.com/ownemployed/image/upload/v1590873376/user_uploads/3D-visning_cygugz.jpg'
    const transformedAvatar = avatar.replace(
        '/upload',
        `/upload/w_auto:100:400`
    )

    return (
        <Link to={`/projects/${id}`} style={{ textDecoration: 'none' }}>
            <Card variant="secondary">
                <Image src={transformedAvatar} width={'100%'} m={'auto'} />
                <Box
                    bg={'white'}
                    sx={{
                        minHeight: 280,
                        mx: 'auto',
                        p: 4,
                    }}
                >
                    <Text as="h1" sx={{ fontSize: [16, 20, 20] }}>
                        {name}
                    </Text>
                    <Text
                        as="body"
                        sx={{
                            mb: 2,
                            overflow: 'auto',
                            textOverflow: 'ellipsis',
                            maxHeight: 70,
                        }}
                    >
                        {shortDescription}
                    </Text>
                    <Flex flexWrap={'wrap'}>
                        {sectors &&
                            sectors.map(({ title }) => (
                                <Text
                                    key={title}
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
                                    {title}
                                </Text>
                            ))}
                        {skillsRequired &&
                            skillsRequired.map(({ title }) => (
                                <Text
                                    key={title}
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
                                    {title}
                                </Text>
                            ))}
                    </Flex>
                </Box>
            </Card>
        </Link>
    )
}

export default ProjectCard
