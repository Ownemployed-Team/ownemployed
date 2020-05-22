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
                justifyContent: 'space-between',
                fontFamily: 'body',
                width: '100%',
            }}
            {...props}
        >
            <Box>
                <Text as="h3">Ownemployed</Text>
                <Link to="/about">About</Link>
            </Box>
            <Box>
                <Link to="/about">About</Link>
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
