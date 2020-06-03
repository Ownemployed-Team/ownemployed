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
                justifySelf: 'end',
                bg: 'white',
                color: 'muted',
                justifyContent: 'flex-start',
                fontFamily: 'body',
                width: '100%',
            }}
            {...props}
        >
            <Box mr={4}>
                <Text as="h3">Ownemployed</Text>
                <Link to="/about" sx={{ color: 'muted' }}>
                    About
                </Link>
            </Box>
            <Box mr={4}>
                <Text as="h3">Terms of use</Text>
                <Link to="/terms-of-use" sx={{ color: 'muted' }}>
                    Terms of Use
                </Link>
            </Box>
            <Box>
                <Text as="h3">Contact</Text>
                <Link to="mailto:ownemployed@gmail.com" sx={{ color: 'muted' }}>
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
