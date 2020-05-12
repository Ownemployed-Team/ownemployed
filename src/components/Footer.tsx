import React from 'react'
import { Box, Flex } from 'rebass'
import { css } from 'emotion'

import Link from 'components/Link'

export const Footer = ({ ...props }) => {
    return (
        <Flex
            p={3}
            pb={5}
            sx={{
                color: 'muted',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#eee',
                textAlign: 'center',
                fontFamily: 'body',
                width: '100',
            }}
            {...props}
        >
            <Link to="https://euvsvirus.org/">
                <img
                    alt="euvsvirus hackathon project"
                    src="/imgs/Pan-EUHackthron_topbanner-V2.jpg"
                    height="62px"
                />
            </Link>
        </Flex>
    )
}

export default Footer
