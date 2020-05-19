import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'
import { Box, Image } from 'rebass'
import { Link } from 'react-router-dom'
import { UniqueInputFieldNamesRule } from 'graphql'

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
                    bg: 'white',
                    mx: 0,
                    padding: 0,
                }}
            >
                <Image src={avatar} m={'auto'} />
                <Box
                    bg={'white'}
                    sx={{
                        maxWidth: 512,
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
