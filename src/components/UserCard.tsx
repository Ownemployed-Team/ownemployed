import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'
import Link from 'components/Link'
import { Image, Box, Flex } from 'rebass'
import { FaMapMarkerAlt } from 'react-icons/fa'

export type User = {
    id: number
    name: string
    summary: string
    location: string
    image: string
}

const UserCard = ({ user }: { user: User }) => {
    //TODO: Change the user type to fit the db
    let avatar = user.image
        ? user.image
        : require('../static/avatars/user/default.png')

    return (
        <Link
            sx={{
                width: ['100%', '100%', '30%'],
                mt: 4,
            }}
            to={`/members/${user.id}`}
        >
            <Card
                sx={{
                    padding: 3,
                    width: '100%',
                }}
            >
                <Flex flexDirection="column">
                    <Box>
                        <Image
                            src={avatar}
                            sx={{
                                height: '100px',
                                borderRadius: 'round',
                                margin: '0 auto',
                            }}
                        />
                    </Box>
                    <Box mt={3}>
                        <Text as="h3" sx={{ fontWeight: 'heading' }}>
                            {user.name}
                        </Text>
                        <Text as="body" sx={{ fontSize: 'card' }}>
                            {user.summary.substring(0, 90).concat('...')}
                        </Text>
                        <Text
                            as="body"
                            sx={{ fontSize: 'card', color: 'primary' }}
                        >
                            <FaMapMarkerAlt style={{ marginRight: 2 }} />
                            {user.location}
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Link>
    )
}

export default UserCard
