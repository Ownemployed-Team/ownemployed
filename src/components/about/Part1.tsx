import React from 'react'
import { Box, Flex } from 'rebass'
import Text from 'components/Text'

const Part1 = () => (
    <Flex
        pr={[4, 4, 6]}
        pl={[4, 4, 6]}
        sx={{
            ml: 0,
            mr: 0,
            pt: 6,
            pb: 7,
            justifyContent: 'space-between',
            backgroundImage: 'url("/imgs/section_bg.png")',
            backgroundSize: '100% 80%',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <Box
            my={4}
            width={[1 / 2]}
            sx={{
                margin: 'auto',
            }}
        >
            <Text as="h1">How is Ownemployed different?</Text>
            <Text as="h3">
                We have done our best to create a simple, easy to use platform
                to help budding entrepreneurs just like you. We believe in the
                value of a supportive community so we are here for you.
            </Text>
        </Box>
    </Flex>
)

export default Part1
