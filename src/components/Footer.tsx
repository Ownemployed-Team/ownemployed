import React from 'react'
import { Box, Flex } from 'rebass'

import Link from 'components/Link'
import Text from 'components/Text'

export const Footer = ({ ...props }) => {
    return (
        <Flex
            p={3}
            mt={4}
            pl={[4, 4, 6]}
            pr={[4, 4, 6]}
            sx={{
                backgroundColor: 'baseWhite',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flexWrap: 'wrap',
            }}
            {...props}
        >
            <Box mr={4}>
                <Text
                    sx={{
                        color: '#000000',
                        fontSize: ['body', 'body', 'h4', 'h4'],
                        fontFamily: ['body', 'heading', 'heading'],
                    }}
                >
                    Ownemployed
                </Text>
                <Link to="/about" sx={{ color: '#768598', fontSize: 'body' }}>
                    About
                </Link>
            </Box>
            <Box mr={4}>
                <Text
                    sx={{
                        color: '#000000',
                        fontSize: ['body', 'body', 'h4', 'h4'],
                        fontFamily: ['body', 'body', 'heading', 'heading'],
                    }}
                >
                    Terms of use
                </Text>
                <Link
                    to="/legal/terms-of-use"
                    sx={{ color: '#768598', fontSize: 'body' }}
                >
                    Terms of Use
                </Link>
            </Box>
            <Box mr={4}>
                <Text
                    sx={{
                        color: '#000000',
                        fontSize: ['body', 'body', 'h4', 'h4'],
                        fontFamily: ['body', 'body', 'heading', 'heading'],
                    }}
                >
                    Privacy policy
                </Text>
                <Link
                    to="/legal/privacy-policy"
                    sx={{ color: '#768598', fontSize: 'body' }}
                >
                    Privacy policy
                </Link>
            </Box>
            <Box>
                <Text
                    sx={{
                        color: '#000000',
                        fontSize: ['body', 'body', 'h4', 'h4'],
                        fontFamily: ['body', 'body', 'heading', 'heading'],
                    }}
                >
                    Contact
                </Text>
                <Link
                    to="mailto:ownemployed@gmail.com"
                    sx={{ color: '#768598', fontSize: 'body' }}
                >
                    ownemployed@gmail.com
                </Link>
            </Box>
        </Flex>
    )
}

export default Footer

//<Link to="https://euvsvirus.org/">
//    <img
//        alt="euvsvirus hackathon project"
//        src="/imgs/Pan-EUHackthron_topbanner-V2.jpg"
//        height="62px"
//    />
//</Link>
