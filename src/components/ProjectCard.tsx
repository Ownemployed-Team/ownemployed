import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'
import { Box, Image } from 'rebass'
import { Label } from '@rebass/forms'
// Avatar as RebassAvatar,
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { UniqueInputFieldNamesRule } from 'graphql'

// const { Meta } = Card

const ProjectCard = ({ project }) => {
    const {
        contributors,
        description,
        id,
        imageUrl,
        keyActivities,
        name,
        status,
    } = project

    const avatar =
        'https://res.cloudinary.com/ownemployed/image/upload/v1590873376/user_uploads/3D-visning_cygugz.jpg'
    const transformedAvatar = avatar.replace(
        '/upload',
        `/upload/w_auto:100:400`
    )

    return (
        <Link to={`/projects/${id}`} style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    borderRadius: '0',
                    bg: '#F3F3F3',
                    mx: '0',
                    padding: '0',
                    minHeight: 385,
                }}
                // style={{ margin: '8px' }}
            >
                <Image src={transformedAvatar} width={'100%'} m={'auto'} />
                <Box
                    bg={'white'}
                    sx={{
                        minHeight: 235,
                        mx: 'auto',
                        p: 4,
                    }}
                >
                    <Text
                        as="h1"
                        sx={{
                            fontSize: [16, 20, 20],
                        }}
                    >
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
                        {description}
                    </Text>
                    {keyActivities &&
                        keyActivities.map(keyActivity => (
                            <Text
                                key={keyActivity}
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
            </Card>
        </Link>
    )
}

export default ProjectCard
