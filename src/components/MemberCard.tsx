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
    } = member
    let avatar = require('../static/avatars/business/default.png')
    try {
        avatar = require(`../static/avatars/business/${id}.png`)
    } catch (e) {}
    return (
        <Link to={`/members/${id}`} style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    borderRadius: '0',
                    bg: '#F3F3F3',
                    mx: '0',
                    padding: '0',
                }}
                // style={{ margin: '8px' }}
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
