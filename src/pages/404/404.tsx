import React from 'react'
import { Flex, Box, Image } from 'rebass'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Layout from 'components/PageLayout'
import Text from 'components/Text'
import Link from 'components/Link'
import Button from 'components/Button'
import Card from 'components/Card'

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
