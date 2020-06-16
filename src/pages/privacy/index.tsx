import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import Button from 'components/Button'
import Text from 'components/Text'
import Layout from 'components/Layout'

export const Privacy = ({ match }) => {
    return (
        <Layout boxed={false}>
            <Heading />
            <Actions />
        </Layout>
    )
}

function Heading() {
    return (
        <Flex mt={3} mb={2} px={[0, 2, 6]}>
            <Box sx={{ textAlign: 'center' }} width={'100%'}>
                <Text as="h3">OwnEmployed Terms of Service</Text>
            </Box>
        </Flex>
    )
}

function Actions() {
    const actions = [
        {
            title: 'Privacy Policy',
            url: '/',
            to: '/legal/privacy-policy',
            image: '',
            body:
                'The Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.',
        },

        {
            title: 'Terms of Service',
            url: '/',
            image: '',
            to: '/legal/terms-of-use',
            body:
                'These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.',
        },
    ]

    return (
        <Flex
            pr={[4, 4, 6]}
            pl={[4, 4, 6]}
            sx={{
                mt: 3,
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-around',
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
                        {/* <Card
                            sx={{
                                px: 2,
                                mb: 4,
                            }}
                        >
                            <Image
                                sx={{
                                    width: '100%',
                                }}
                                src={action.image}
                            />
                        </Card> */}
                        <Text
                            as="h3"
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            {action.title}
                        </Text>
                        <Text>{action.body}</Text>
                        <Box my={2}>
                            <NavLink to={action.to} exact>
                                <Button>Read More</Button>
                            </NavLink>
                        </Box>
                    </Box>
                )
            })}
        </Flex>
    )
}

export default Privacy
