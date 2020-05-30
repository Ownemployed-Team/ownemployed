import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import Text from 'components/Text'
import { NavLink } from 'components/NavLink'
import { Box, Flex } from 'rebass'
import { useAuth0 } from 'lib/react-auth0-spa'

const Part2 = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <Box
            width={[2 / 3]}
            sx={{
                mx: 'auto',
                pb: 6,
            }}
        >
            <Text as="h1">How do I get involved?</Text>
            <Flex>
                <Box width={[1 / 2]}>
                    <Text as="h3">
                        Join our community and then use our platform to: Find a
                        partner and/or team mates Share & develop your idea Get
                        advice & help from others Start your business!
                    </Text>
                </Box>
                <Flex
                    width={[1 / 2]}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'right',
                        }}
                    >
                        <Box m={2}>
                            <NavLink
                                to=""
                                sx={{ width: '286px' }}
                                onClick={() => loginWithRedirect({})}
                            >
                                Create an account
                            </NavLink>
                        </Box>
                        <Box m={2}>
                            <Link to="/projects/">
                                <Button
                                    variant="secondary"
                                    sx={{ width: '286px' }}
                                >
                                    Find projects
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Part2
