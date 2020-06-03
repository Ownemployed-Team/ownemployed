import * as React from 'react'
import { Flex, Box, Image } from 'rebass'
import { NavLink } from 'components/NavLink'
import Text from 'components/Text'
import Link from 'components/Link'
import Layout from 'components/Layout'
import Button from 'components/Button'
import Card from 'components/Card'

const Home = () => {
    return (
        <Layout boxed={false}>
            <Hero />
            <Actions />
            <Initiative />
            <Skills />
            <Reasons />
            <CallToAction />
        </Layout>
    )
}

export default Home

function Hero() {
    return (
        <>
            <Flex mt={5} flexWrap="wrap" pr={[4, 4, 7]} pl={[4, 4, 7]}>
                <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]}>
                    <Box>
                        <Text
                            as="h2"
                            sx={{
                                lineHeight: '36px',
                            }}
                        >
                            Unemployed?
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            as="h1"
                            sx={{
                                lineHeight: '66px',
                                fontWeight: 'bold',
                            }}
                        >
                            No,{' '}
                            <span style={{ textDecoration: 'underline' }}>
                                Own
                            </span>
                            employed!
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            as="h2"
                            sx={{
                                color: 'body',
                                lineHeight: '36px',
                            }}
                        >
                            Why wait to be employed, when you can be an
                            entrepreneur?
                        </Text>
                    </Box>
                    <Box my={2}>
                        <NavLink
                            to="/projects"
                            sx={{
                                pt: 6,
                                fontSize: 'body',
                            }}
                        >
                            <Button
                                sx={{
                                    height: '72px',
                                    my: 4,
                                    width: ['200px', '300px', '500px'],
                                }}
                            >
                                <Text
                                    as="h2"
                                    sx={{
                                        color: '#fff',
                                    }}
                                >
                                    Find a Project
                                </Text>
                            </Button>
                        </NavLink>
                    </Box>
                </Box>

                <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]}>
                    <Image
                        sx={{
                            height: '419px',
                            width: '100%',
                            display: ['none', 'none', 'block'],
                        }}
                        src="/imgs/illustrations/homepage-ideas.svg"
                    ></Image>
                </Box>
            </Flex>
        </>
    )
}

function Actions() {
    const actions = [
        {
            title: 'Find People',
            url: '/members',
            image: '/imgs/illustrations/find-people.svg',
            body:
                'Looking to round out your team? Find people with the skills and drive to make your project a success.',
        },

        {
            title: 'Find Projects',
            url: '/projects',
            image: '/imgs/illustrations/find-projects.svg',
            body:
                'Bring your talents to an idea you care about. Choose a project that aligns with your goals, values, and work style.',
        },

        {
            title: 'Learn and Build',
            url: '/',
            image: '/imgs/illustrations/learn-and-build.svg',
            body:
                'Our collection of resources are here to help you every step of the way. You’ve got questions, we’ve got answers.',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 7]}
            pl={[4, 4, 7]}
            sx={{
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-between',
            }}
        >
            {actions.map((action, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            mt: [4, 4, 0],
                            width: ['100%', '100%', '30%'],
                        }}
                    >
                        <Box
                            sx={{
                                px: 2,
                                mb: 4,
                                backgroundColor: '#f7f8fc',
                            }}
                        >
                            <NavLink to={action.url}>
                                <Image
                                    sx={{
                                        width: '100%',
                                    }}
                                    src={action.image}
                                />
                            </NavLink>
                        </Box>
                        <Box m={2}>
                            <Text
                                as="h2"
                                sx={{
                                    textAlign: 'center',
                                    lineHeight: '36px',
                                }}
                            >
                                {action.title}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                as="h3"
                                sx={{
                                    lineHeight: '32px',
                                }}
                            >
                                {action.body}
                            </Text>
                        </Box>
                    </Box>
                )
            })}
        </Flex>
    )
}

function Initiative() {
    return (
        <Flex
            pr={[4, 4, 7]}
            pl={[4, 4, 7]}
            sx={{
                ml: 0,
                mr: 0,
                mt: 6,
                pt: 6,
                pb: 6,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundImage: 'url("/imgs/section_bg.png")',
                backgroundSize: '100% 80%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]} mr={[0, 0, 5]}>
                <Image
                    sx={{
                        height: '331px',
                        width: '100%',
                        display: ['none', 'none', 'block'],
                    }}
                    src="/imgs/illustrations/social.svg"
                ></Image>
            </Box>
            <Box width={[1, 1, 1 / 2]} mb={[0, 0, 5]}>
                <Text as="h2" sx={{ my: 2 }}>
                    A COVID-19 Initiative
                </Text>
                <Text as="h3" sx={{ mb: 4 }}>
                    This platform was built to help people forge their own path
                    amidst our current environment.
                </Text>
                <Text as="h3">
                    We believe the economy of the future will be driven by you.
                </Text>
            </Box>
        </Flex>
    )
}

function Reasons() {
    const reasons = [
        {
            title: 'Recession = opportunity',
            icon: '/imgs/icons/idea.svg',
            body:
                'Instagram, Whatsapp, Uber, Pintrest, Slack, Groupon, and Venmo were all founded during the 2008 global recession.',
        },

        {
            title: 'High unemployment rate',
            icon: '/imgs/icons/bars.svg',
            body:
                'Competition for jobs is higher than ever. You can wait to be chosen, or you can pick yourself.',
        },

        {
            title: 'Entrepreneurs are the future',
            icon: '/imgs/icons/conn.svg',
            body:
                'Our world is shaped by the ideas of people like Gates, Jobs, and Zuckerberg. The future belongs to innovators and entrepreneurs.',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 7]}
            pl={[4, 4, 7]}
            sx={{
                ml: 0,
                mr: 0,
                mt: 4,
                pt: 6,
                pb: 6,
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-between',
                backgroundImage: 'url("/imgs/section_bg.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {reasons.map((reason, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            mt: [4, 4, 0],
                            width: ['100%', '100%', '30%'],
                        }}
                    >
                        <Image
                            sx={{
                                width: '30%',
                                mx: 'auto',
                                mb: 4,
                            }}
                            src={reason.icon}
                        ></Image>
                        <Text as="h3">{reason.title}</Text>
                        <Text>{reason.body}</Text>
                    </Box>
                )
            })}
        </Flex>
    )
}

function Skills() {
    return (
        <Flex mt={6} flexWrap="wrap" pr={[4, 4, 7]} pl={[4, 4, 7]}>
            <Box width={[1, 1, 2 / 3]} mb={[0, 0, 5]}>
                <Text
                    as="h2"
                    sx={{
                        lineHeight: '52px',
                        fontWeight: 'normal',
                    }}
                >
                    Turn your skills and passion into your next opportunity.
                </Text>

                <Text as="body">
                    Embrace entrepreneurship as the next step in your career.
                </Text>
            </Box>

            <Box width={[1, 1, 1 / 3]} mb={[0, 0, 5]}>
                <Image
                    sx={{
                        width: '100%',
                        display: ['none', 'none', 'block'],
                    }}
                    src="/imgs/illustrations/board.svg"
                ></Image>
            </Box>
        </Flex>
    )
}

function CallToAction() {
    return (
        <Flex mt={5} flexWrap="wrap" pr={[4, 4, 7]} pl={[4, 4, 7]}>
            <Box width={[1, 1, 2 / 3]} mb={[0, 0, 5]}>
                <Text
                    as="h2"
                    sx={{
                        lineHeight: '52px',
                        fontWeight: 'normal',
                    }}
                >
                    Ready to join our community and transform the world?
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
                    Create an Account
                </Button>
            </Box>

            <Box width={[1, 1, 1 / 3]} mb={[0, 0, 5]}>
                <Image
                    sx={{
                        width: '100%',
                        display: ['none', 'none', 'block'],
                    }}
                    src="/imgs/illustrations/team.svg"
                ></Image>
            </Box>
        </Flex>
    )
}
