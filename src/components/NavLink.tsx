import React, {
    ReactChildren,
    ReactChild,
    ReactElement,
    FunctionComponent,
} from 'react'
import Button from 'components/Button'

import Link from 'components/Link'

type NavLinkProps = {
    children: ReactChildren | ReactElement | ReactChild | string | string[]
    to: string
    className?: string
    sx?: object
    css?: object
    rest?: object
    onClick?: Function
}

export const NavLink: FunctionComponent<NavLinkProps> = ({
    children,
    to,
    onClick,
    ...rest
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
                {...rest}
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
            {...rest}
        >
            {children}
        </Link>
    )
}

export default NavLink
