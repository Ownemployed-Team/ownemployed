import * as React from 'react'
import { Flex, Box, Image } from 'rebass'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Layout from 'components/PageLayout'
import Text from 'components/Text'
import Link from 'components/Link'
import Button from 'components/Button'
import Card from 'components/Card'

const GET_USER = gql`
    {
        getUser(id: "1") {
            id
            name
        }
    }
`

const Home = () => {
    const { loading, error, data, ...rest } = useQuery(GET_USER)
    console.log(data, rest)
    return (
        <Layout>
            <Flex
                mt={5}
                //flexDirection={['column', 'column', 'row']}
                flexWrap="wrap"
            >
                <Box width={[1, 1, 2 / 3]} mb={[0, 0, 5]}>
                    <Text
                        as="h1"
                        sx={{
                            lineHeight: '52px',
                            fontWeight: 'bold',
                        }}
                    >
                        Why wait to be employed, when you can be an
                        entrepreneur?
                    </Text>
                    <Text as="body">
                        Why wait to be employed, when you can be an
                        entrepreneur?
                    </Text>
                    <Button
                        sx={{
                            marginTop: 4,
                            pt: 2,
                            pb: 2,
                            pl: 4,
                            pr: 4,
                            fontSize: 'body',
                        }}
                    >
                        Find a Project
                    </Button>
                </Box>

                <Box width={[1, 1, 1 / 3]} mb={[0, 0, 5]}>
                    <Image
                        sx={{
                            //width: ['100%', '100%', '30%'],
                            width: '100%',
                        }}
                        src="/imgs/illustrations/homepage-ideas.svg"
                    ></Image>
                </Box>
            </Flex>

            <Flex mt={5} mb={4} px={[0, 2, 6]} textAlign="center">
                <Box>
                    <Text as="h3">
                        Take the opportunity to start something you are
                        passionate about and eventually make a living out of it!
                    </Text>
                </Box>
            </Flex>

            <Flex
                sx={{
                    mt: 4,
                    flexDirection: ['column', 'column', 'row'],
                    //flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                <Link
                    to="/"
                    sx={{
                        mt: [4, 4, 0],
                        px: 0,
                        width: ['100%', '100%', '30%'],
                    }}
                >
                    <Card>
                        <Text>I want to start a project</Text>
                    </Card>
                </Link>

                <Link
                    to="/"
                    sx={{
                        mt: [4, 4, 0],
                        px: 0,
                        width: ['100%', '100%', '30%'],
                    }}
                >
                    <Card>
                        <Text>I want to start a project</Text>
                    </Card>
                </Link>

                <Link
                    to="/"
                    style={{
                        mt: [4, 4, 0],
                        px: 0,
                        width: ['100%', '100%', '30%'],
                    }}
                >
                    <Card>
                        <Text>I want to start a project</Text>
                    </Card>
                </Link>
            </Flex>
        </Layout>
    )
}

export default Home
