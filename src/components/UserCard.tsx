import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'
import { Image } from 'rebass'
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
    if (summary && summary.length > 90)
        summary = summary.substring(0, 90).concat(' ...')
    if (location && location.length > 25)
        location = location.substring(0, 25).concat(' ...')
    return { summary: summary, location: location }
}

const UserCard = ({ user }: { user: User }) => {
    //TODO: Change the user type to fit the db
    let avatar = user.avatar
        ? user.avatar
        : require('../static/avatars/user/default.png')
    const { summary, location } = truncateValues(user.summary, user.location)

    return (
        <Card
            style={{
                height: '270px',
                width: '265px',
                padding: '16px 24px 24px 24px',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <Image
                    src={avatar}
                    sx={{
                        height: '100px',
                        width: '100px',
                        borderRadius: 'round',
                        margin: '0 auto',
                    }}
                />
                <Text as="h3" sx={{ fontWeight: 'heading' }}>
                    {user.name}
                </Text>
            </div>
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
        </Card>
    )
}

export default UserCard
