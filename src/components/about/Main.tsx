import React from 'react'
import Text from 'components/Text'
import { Box, Image } from 'rebass'

const Main = () => (
    <Box
        sx={{
            pt: 6,
            width: '100%',
        }}
    >
        <Box
            my={4}
            width={[2 / 3]}
            sx={{
                margin: 'auto',
            }}
        >
            <Box width={[1 / 2]}>
                <Text as="h1">About Ownemployed</Text>
                <Text as="h3">
                    Our goal is to see a new breed of successful businesses
                    which drive a people driven economy. We want to help you use
                    your skills, follow your passions and create your own
                    employment.
                </Text>
            </Box>
            <Box my={5}>
                <Image
                    style={{
                        width: '656px',
                        height: '411px',
                        margin: 'auto',
                    }}
                    src="/imgs/illustrations/about.svg"
                />
            </Box>
        </Box>
    </Box>
)

export default Main
