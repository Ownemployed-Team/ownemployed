import React from 'react'
import Card from 'components/Card'
import { Text } from 'components/Text'

const Hero = () => {
    return (
        <Card
            sx={{
                borderRadius: '0',
                my: 4,
                mx: 2,
                p: 4,
                textAlign: 'center',
            }}
        >
            <Text as="h2">Find Members</Text>
            <Text as="body" sx={{ width: '50%', m: 'auto' }}>
                Look for Ownemployed members to collaborate with, or for others
                who share your interests.
            </Text>
        </Card>
    )
}

export default Hero
