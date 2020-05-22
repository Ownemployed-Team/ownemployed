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
                    borderRadius: 'default',
                    padding: 3,
                }}
            >
                <Image src={avatar} m="auto" />
                <Box mt={3}>
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
                        }}
                    >
                        {education}
                    </Text>
                    <Text
                        as="body"
                        sx={{
                            mb: 2,
                        }}
                    >
                        {location}
                    </Text>
                </Box>
            </Card>
        </Link>
    )
}

export default MemberCard
