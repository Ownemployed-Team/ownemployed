import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'

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
            <Text as="h2">Find Projects</Text>
            <Text as="body" sx={{ width: '50%', m: 'auto' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ... who share your interests.
            </Text>
        </Card>
    )
}

export default Hero
