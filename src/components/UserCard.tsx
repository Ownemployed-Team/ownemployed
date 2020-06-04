import React from 'react'
import Card from 'components/Card'
import { Link } from 'react-router-dom'
import Text from 'components/Text'
import { Box, Image } from 'rebass'
import { FaMapMarkerAlt } from 'react-icons/fa'

export type User = {
    id: number
    name: string
    signupDate: number
    summary: string
    socialMedia: any[]
    interests: any[]
    lookingFor: string[]
    skills: string[]
    education: string
    location: string
    avatar: string
}

function truncateValues(summary, location) {
    console.log(summary)
    console.log(location)
    if (summary && summary.length > 90)
        summary = summary.substring(0, 90).concat(' ...')
    if (location && location.length > 25)
        location = location.substring(0, 25).concat(' ...')
    return { summary: summary, location: location }
}

const UserCard = ({ user }: { user: User }) => {
    //TODO: Change the user type to fit the db
    let avatar = user.avatar
        ? `https://res.cloudinary.com/demo/image/fetch/w_200,h_200,c_crop,g_face,r_max/w_200,f_png/${user.avatar}`
        : require('../static/avatars/user/default.png')
    const { summary, location } = truncateValues(user.summary, user.location)

    // const avatar2 =
    //     'https://res.cloudinary.com/ownemployed/image/upload/v1590873376/user_uploads/3D-visning_cygugz.jpg'
    // const transformedAvatar = avatar2.replace(
    //     '/upload',
    //     `/upload/w_auto:100:400`
    // )

    return (
        <Link to={`/members/${user.id}`} style={{ textDecoration: 'none' }}>
            <Card variant="secondary" sx={{ bg: 'white' }}>
                <Image src={avatar} width={200} m={'auto'} p={4} />
                <Box
                    bg={'white'}
                    sx={{
                        minHeight: 235,
                        mx: 'auto',
                        p: 4,
                    }}
                >
                    <Text as="h1" sx={{ fontSize: [16, 20, 20] }}>
                        {user.name}
                    </Text>
                    <Text as="body" sx={{ fontSize: 'card', height: '70px' }}>
                        {user.summary ? summary : 'No summary yet'}
                    </Text>
                    <Text
                        as="body"
                        sx={{
                            fontSize: 'card',
                            color: 'primary',
                            verticalAlign: 'bottom',
                        }}
                    >
                        <FaMapMarkerAlt style={{ marginRight: 2 }} />
                        {user.location ? location : 'Unknown'}
                    </Text>
                </Box>
            </Card>
        </Link>
    )
}

export default UserCard
