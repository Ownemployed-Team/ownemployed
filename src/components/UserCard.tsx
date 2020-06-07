import React from 'react'
import Card from 'components/Card'
import { Link } from 'react-router-dom'
import Text from 'components/Text'
import { Box, Image } from 'rebass'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Sider from 'antd/lib/layout/Sider'

export type User = {
    avatar: string
    education: string
    firstName: string
    headline: string
    id: number
    interests: any[]
    lastName: string
    location: string
    lookingFor: string[]
    signupDate: number
    skills: string[]
    socialMedia: any[]
    summary: string
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

const UserCard = ({
    user: { avatar, summary, id, headline, firstName, lastName, location },
}: {
    user: User
}) => {
    //TODO: Change the user type to fit the db
    let avatarUrl = avatar
        ? `https://res.cloudinary.com/demo/image/fetch/w_200,h_200,c_crop,g_face,r_max/w_200,f_png/${avatar}`
        : require('../static/avatars/user/default.png')
    const {
        summary: truncatedSummary,
        location: truncatedLocation,
    } = truncateValues(summary, location)

    // const avatar2 =
    //     'https://res.cloudinary.com/ownemployed/image/upload/v1590873376/user_uploads/3D-visning_cygugz.jpg'
    // const transformedAvatar = avatar2.replace(
    //     '/upload',
    //     `/upload/w_auto:100:400`
    // )

    return (
        <Link to={`/members/${id}`} style={{ textDecoration: 'none' }}>
            <Card variant="secondary" sx={{ bg: 'white' }}>
                <Image src={avatarUrl} width={200} m={'auto'} p={4} />
                <Box
                    bg={'white'}
                    sx={{
                        minHeight: 235,
                        mx: 'auto',
                        p: 4,
                    }}
                >
                    <Text as="body" sx={{ textAlign: 'center' }}>
                        {headline}
                    </Text>
                    <Text
                        as="h1"
                        sx={{ fontSize: [16, 20, 20], textAlign: 'center' }}
                    >
                        {`${firstName} ${lastName}`}
                    </Text>
                    <Text as="body" sx={{ fontSize: 'card', height: '70px' }}>
                        {truncatedSummary ? truncatedSummary : 'No summary yet'}
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
                        {truncatedLocation ? truncatedLocation : 'Unknown'}
                    </Text>
                </Box>
            </Card>
        </Link>
    )
}

export default UserCard
