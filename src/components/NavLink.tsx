import React, {
    ReactChildren,
    ReactChild,
    ReactElement,
    FunctionComponent,
} from 'react'
import { Link as RebassLink } from 'rebass'
import { Link as RouterLink } from 'react-router-dom'
import { css } from 'emotion'

import Link from 'components/Link'

type NavLinkProps = {
    children: ReactChildren | ReactElement | ReactChild
    to: string
    className?: string
    sx?: object
    css?: object
    rest?: any
}

export const NavLink: FunctionComponent<NavLinkProps> = ({
    children,
    to,
    ...rest
}) => {
    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                padding: '0px 10px 0px',
                marginRight: 0,
                fontWeight: 500,
                fontSize: '14px',
                color: 'black',
            }}
            {...rest}
        >
            {children}
        </Link>
    )
}

export default NavLink
