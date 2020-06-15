import React, { FunctionComponent, ReactNode } from 'react'
import Button from 'components/Button'

import Link from 'components/Link'
import { SxStyleProp } from 'rebass'

type NavLinkProps = {
    children: ReactNode
    to: string
    className?: string
    sx?: SxStyleProp
    css?: object
    props?: object
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const NavLink: FunctionComponent<NavLinkProps> = ({
    children,
    to,
    onClick,
    ...props
}) => {
    if (onClick) {
        // TODO Fix button styling
        return (
            <Button
                onClick={onClick}
                sx={{
                    cursor: 'pointer',
                    py: '10px',
                    textDecoration: 'none',
                    marginRight: 0,
                    fontWeight: 500,
                    fontSize: 'body',
                    '&:hover': {
                        backgroundColor: 'primaryHover',
                    },
                }}
                {...props}
            >
                {children}
            </Button>
        )
    }

    return (
        <Link
            to={to}
            sx={{
                textDecoration: 'none',
                padding: '0px 10px 0px',
                marginRight: 0,
                fontWeight: 500,
                fontSize: 'body',
                color: 'black',
                '& a:visited': {
                    color: 'black',
                },
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export default NavLink
