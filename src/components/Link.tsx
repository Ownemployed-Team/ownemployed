import React, {
    ReactChildren,
    ReactChild,
    ReactElement,
    FunctionComponent,
} from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as RebassLink, Box } from 'rebass'
import { css } from 'emotion'

type LinkProps = {
    children: ReactChildren | ReactElement | ReactChild | string | string[]
    className?: string
    css?: object
    props?: any
    style?: object
    sx?: object
    to: string
    variant?: string
}

const linkStyle = css`
    text-decoration: none;
`

export const Link: FunctionComponent<LinkProps> = ({
    children,
    to,
    variant,
    sx,
    ...props
}) => {
    if (to.startsWith('http') || to.startsWith('mailto')) {
        return (
            <RebassLink
                target="_blank"
                className={linkStyle}
                href={to}
                variant={variant || 'primary'}
                sx={{ ...sx }}
                {...props}
            >
                {children}
            </RebassLink>
        )
    } else {
        return (
            <Box sx={{ display: 'inline', ...sx }}>
                <ReactRouterLink to={to} className={linkStyle} {...props}>
                    {children}
                </ReactRouterLink>
            </Box>
        )
    }
}

export default Link
