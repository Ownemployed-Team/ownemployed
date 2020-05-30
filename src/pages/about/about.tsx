import React, { useState } from 'react'
import { NavLink } from 'components/NavLink'
import { css } from 'emotion'
import Text from 'components/Text'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import { Box, Flex, Image } from 'rebass'
import { useAuth0 } from 'lib/react-auth0-spa'

const About = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <Box>
            <Box
                sx={{
                    pt: 6,
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
                            Our goal is to see a new breed of successful
                            businesses which drive a people driven economy. We
                            want to help you use your skills, follow your
                            passions and create your own employment.
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
                        We have done our best to create a simple, easy to use
                        platform to help budding entrepreneurs just like you. We
                        believe in the value of a supportive community so we are
                        here for you.
                    </Text>
                </Box>
            </Flex>
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
                            Join our community and then use our platform to:
                            Find a partner and/or team mates Share & develop
                            your idea Get advice & help from others Start your
                            business!
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
        </Box>
    )
}
export default About
