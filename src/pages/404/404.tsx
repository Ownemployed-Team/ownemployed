import React from 'react'
import { Flex, Box, Image } from 'rebass'

import Text from 'components/Text'
import Link from 'components/Link'
import Layout from 'components/Layout'

export const NoMatch = () => {
    return (
        <Layout>
            <Box
                sx={{
                    mt: 6,
                    textAlign: 'center',
                }}
            >
                <Text
                    as="h1"
                    sx={{
                        fontSize: '7em',
                        lineHeight: '1em',
                    }}
                >
                    404
                </Text>
                <Text>Not Found</Text>
            </Box>
        </Layout>
    )
}

export default NoMatch
