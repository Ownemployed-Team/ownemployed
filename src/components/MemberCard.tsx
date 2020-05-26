import React from 'react'
import { Box, Image } from 'rebass'
import { Link } from 'react-router-dom'
import { UniqueInputFieldNamesRule } from 'graphql'

import Card from 'components/Card'
import Text from 'components/Text'

const MemberCard = ({ member }) => {
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
        avatar,
    } = member

    const url = `/members/${id}`

    return (
        <Link to={url} style={{ textDecoration: 'none' }}>
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
                <Image src={avatar} m={'auto'} />
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
                        {location}
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
                        {education}
                    </Text>
                </Box>
            </Card>
        </Link>
    )
}

export default MemberCard
