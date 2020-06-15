import * as React from 'react'
import { Flex, Box, Image } from 'rebass'
import { NavLink } from 'components/NavLink'
import Text from 'components/Text'
import Layout from 'components/Layout'
import Button from 'components/Button'
import { useAuth0 } from 'lib/react-auth0-spa'

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
            <Flex
                mt={1}
                flexWrap="wrap"
                pr={[0, 4, 4, 6]}
                pl={[0, 4, 4, 6]}
                width="100%"
            >
                <Box
                    mb={[0, 0, 0, 5]}
                    sx={{ width: ['100%', '100%', '100%', '40%'] }}
                >
                    <Flex
                        sx={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: '5',
                            marginBottom: '5',
                        }}
                    >
                        <Text
                            sx={{
                                fontFamily: 'heading',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: ['16px', '16px', '16px', 'h2'],
                                lineHeight: ['20px', '20px', '20px', '36px'],
                                color: 'baseBlack',
                                width: '100%',
                                textAlign: [
                                    'center',
                                    'center',
                                    'center',
                                    'left',
                                ],
                            }}
                        >
                            Take control of your career
                        </Text>

                        <Text
                            sx={{
                                fontFamily: 'heading',
                                fontSize: ['h2', 'h2', 'h2', '44px'],
                                fontWeight: 'bold',
                                lineHeight: ['36px', '36px', '36px', '66px'],
                                color: 'baseBlack',
                                width: '100%',
                                textAlign: [
                                    'center',
                                    'center',
                                    'center',
                                    'left',
                                ],
                            }}
                        >
                            Be{' '}
                            <span style={{ textDecoration: 'underline' }}>
                                Own
                            </span>
                            employed!
                        </Text>
                        <Text
                            sx={{
                                fontFamily: 'body',
                                fontSize: ['14px', '14px', '14px', 'h3'],
                                fontWeight: 'normal',
                                lineHeight: ['18px', '18px', '18px', '32px'],
                                color: '#768598',
                                width: '100%',
                                textAlign: [
                                    'center',
                                    'center',
                                    'center',
                                    'left',
                                ],
                            }}
                        >
                            Our community can help you turn an idea into a
                            career.
                        </Text>

                        <Button
                            sx={{
                                height: ['42px', '42px', '42px', '72px'],
                                width: ['205px', '205px', '205px', '500px'],
                                margin: '0',
                                padding: '0',
                                boxShadow: [
                                    '0px 3px 6px rgba(92, 92, 92, 0.25)',
                                    '0px 3px 6px rgba(92, 92, 92, 0.25)',
                                    '0px 3px 6px rgba(92, 92, 92, 0.25)',
                                    '',
                                ],
                                backgroundColor: 'basePurple',

                                borderRadius: 'button',
                                maxWidth: '100%',
                            }}
                        >
                            <NavLink
                                to="/signup"
                                sx={{
                                    margin: '0',
                                    padding: '0',
                                }}
                            >
                                <Text
                                    sx={{
                                        margin: '0',
                                        padding: '0',
                                        color: 'baseWhite',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Create a Free Account
                                </Text>
                            </NavLink>
                        </Button>
                    </Flex>
                </Box>
                <Box mx="auto" />
                <Box width="40%" mb={[0, 0, 0, 5]}>
                    <Image
                        sx={{
                            display: ['none', 'none', 'none', 'block'],
                            height: '419px',
                            width: '100%',
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
            body: 'Find People with the skills your project needs',
            image: '/imgs/illustrations/find-people.svg',
            title: 'Find People',
            url: '/members',
        },

        {
            body: 'Find projects that are right for you and need your help.',
            image: '/imgs/illustrations/find-projects.svg',
            title: 'Find Projects',
            url: '/projects',
        },

        {
            body: "Find free advice and support that's right for you.",
            image: '/imgs/illustrations/learn-and-build.svg',
            title: 'Learn and Build',
            url: 'https://ownemployed.tribe.so/',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 4, 6]}
            pl={[4, 4, 4, 6]}
            sx={{
                flexDirection: ['column', 'column', 'column', 'row'],
                justifyContent: 'space-between',
            }}
        >
            {actions.map(({ body, image, title, url }, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            mt: [4, 4, 0],
                            width: ['100%', '100%', '100%', '30%'],
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#f7f8fc',
                                mb: 4,
                                px: 2,
                            }}
                        >
                            <NavLink to={url}>
                                <Image
                                    sx={{
                                        width: '100%',
                                    }}
                                    src={image}
                                />
                            </NavLink>
                        </Box>
                        <Box m={2}>
                            <Text
                                sx={{
                                    fontFamily: 'heading',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: ['h4', 'h4', 'h4', 'h2'],
                                    lineHeight: [
                                        '24px',
                                        '24px',
                                        '24px',
                                        '36px',
                                    ],
                                    textAlign: 'center',
                                    color: '#000000',
                                }}
                            >
                                {title}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                sx={{
                                    fontFamily: 'body',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: ['body', 'body', 'body', 'h3'],
                                    lineHeight: [
                                        '18px',
                                        '18px',
                                        '18px',
                                        '32px',
                                    ],
                                    textAlign: 'center',
                                    color: '#768598',
                                }}
                            >
                                {body}
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
            pr={[4, 4, 4, 6]}
            pl={[4, 4, 4, 6]}
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
            <Box width={[1, 1, 1 / 2]} mb={[0, 0, 0, 5]} mr={[0, 0, 0, 5]}>
                <Image
                    sx={{
                        height: '331px',
                        width: '100%',
                        display: ['none', 'none', 'block'],
                    }}
                    src="/imgs/illustrations/social.svg"
                ></Image>
            </Box>
            <Box mx="auto" />
            <Box
                width={[1, 1, 1 / 2]}
                mb={[0, 0, 5]}
                sx={{ width: ['100%', '100%', '100%', '40%'] }}
            >
                <Text
                    sx={{
                        fontFamily: 'heading',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: ['h4', 'h4', 'h4', 'h2'],
                        lineHeight: ['24px', '24px', '24px', '36px'],
                        color: '#000000',
                    }}
                >
                    A COVID-19 initiative
                </Text>
                <Text
                    sx={{
                        fontFamily: 'body',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: ['body', 'body', 'body', 'h3'],
                        lineHeight: ['24px', '24px', '24px', '36px'],
                        color: '#768598',
                    }}
                >
                    COVID-19 has changed what employment means for millions of
                    people. <br /> We know this is a difficult time. We want to
                    help you start something new and take control of your
                    career.
                </Text>
            </Box>
        </Flex>
    )
}

function Reasons() {
    const reasons = [
        {
            title: 'New starts in difficult times',
            icon: '/imgs/icons/idea.svg',
            body:
                'Instagram, Whatsapp, Uber, Pintrest, Slack, Groupon, and Venmo were all founded during the 2008 global recession.',
        },

        {
            title: 'Fewer jobs for more people',
            icon: '/imgs/icons/bars.svg',
            body:
                'There are fewer jobs, and more people want them. Being your own boss means you can choose your work.',
        },

        {
            title: 'The world is changing',
            icon: '/imgs/icons/conn.svg',
            body:
                'The world is changing, and the way people work is changing. Taking control of your career and starting something new can prepare you for this change.',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 4, 6]}
            pl={[4, 4, 4, 6]}
            sx={{
                backgroundImage: 'url("/imgs/section_bg.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                flexDirection: ['column', 'column', 'column', 'row'],
                justifyContent: 'space-between',
                ml: 0,
                mr: 0,
                mt: 4,
                pb: 6,
                pt: 6,
            }}
        >
            {reasons.map((reason, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            mt: [4, 4, 4, 0],
                            width: ['100%', '100%', '100%', '30%'],
                        }}
                    >
                        <Image
                            sx={{
                                mb: 4,
                                mx: 'auto',
                                width: '30%',
                            }}
                            src={reason.icon}
                        ></Image>
                        <Text
                            sx={{
                                fontFamily: 'heading',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: ['h4', 'h4', 'h4', 'h3'],
                                lineHeight: ['24px', '24px', '24px', '32px'],
                                textAlign: 'center',
                                color: '#000000',
                            }}
                        >
                            {reason.title}
                        </Text>
                        <Text
                            sx={{
                                fontFamily: 'body',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: ['body', 'body', 'body', 'h3'],
                                lineHeight: ['18px', '18px', '18px', '24px'],
                                color: '#768598',
                            }}
                        >
                            {reason.body}
                        </Text>
                    </Box>
                )
            })}
        </Flex>
    )
}

function Skills() {
    return (
        <Flex
            flexWrap="wrap"
            mt={2}
            pr={[4, 4, 4, 6]}
            pl={[4, 4, 4, 6]}
            sx={{
                flexDirection: ['column', 'column', 'column', 'column', 'row'],
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box mb={[0, 0, 5]} sx={{ width: ['100%', '100%', '100%', '40%'] }}>
                <Text
                    sx={{
                        fontFamily: 'heading',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: ['h4', 'h4', 'h4', 'h2'],
                        lineHeight: ['24px', '24px', '24px', '36px'],
                        textAlign: ['center', 'center', 'center', ''],
                        color: '#000000',
                    }}
                >
                    Be your own boss and do the things you love
                </Text>

                <Text
                    sx={{
                        fontFamily: 'body',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: ['body', 'body', 'body', 'h3'],
                        lineHeight: ['18px', '18px', '18px', '32px'],
                        color: '#768598',
                    }}
                >
                    With our help and suport you can turn ideas into projects
                    and start something new.
                </Text>
            </Box>
            <Box mx="auto" />
            <Box mb={[0, 0, 5]} sx={{ width: ['100%', '100%', '100%', '40%'] }}>
                <Image
                    sx={{
                        display: ['none', 'none', 'none', 'block'],
                        width: '100%',
                    }}
                    src="/imgs/illustrations/board.svg"
                ></Image>
            </Box>
        </Flex>
    )
}

function CallToAction() {
    const { isAuthenticated, loginWithRedirect } = useAuth0()
    return (
        <Flex
            flexWrap="wrap"
            mt={5}
            pr={[4, 4, 4, 6]}
            pl={[4, 4, 4, 6]}
            sx={{ flexDirection: ['column', 'column', 'column', 'row'] }}
        >
            <Box
                mt={[0, 0, 0, 5]}
                sx={{ width: ['100%', '100%', '100%', '40%'] }}
            >
                <Flex
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        sx={{
                            fontFamily: 'heading',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: ['h4', 'h4', 'h4', 'h1'],
                            lineHeight: ['24px', '24px', '24px', '44px'],
                            textAlign: 'center',
                            color: 'baseBlack',
                            width: '100%',
                        }}
                    >
                        Ready to join our community and be Ownemployed?
                    </Text>
                    {!isAuthenticated && (
                        <NavLink
                            sx={{
                                marginTop: 4,
                                pb: 2,
                                pl: 4,
                                pr: 4,
                                pt: 2,
                            }}
                            to=""
                            onClick={() => loginWithRedirect({})}
                        >
                            <Button>Create a Free Account</Button>
                        </NavLink>
                    )}
                </Flex>
            </Box>
            <Box mx="auto" />
            <Box mb={[0, 0, 5]} sx={{ width: ['100%', '100%', '100%', '40%'] }}>
                <Image
                    src="/imgs/illustrations/team.svg"
                    sx={{
                        display: ['none', 'none', 'none', 'block'],
                        width: '100%',
                    }}
                ></Image>
            </Box>
        </Flex>
    )
}
