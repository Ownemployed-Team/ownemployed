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
    to: string
    children: ReactChildren | ReactElement | ReactChild | string | string[]
    className?: string
    sx?: object
    css?: object
    rest?: any
    style?: object
}

const linkStyle = css`
    text-decoration: none;
`

export const Link: FunctionComponent<LinkProps> = ({
    children,
    to,
    sx,
    ...rest
}) => {
    if (to.startsWith('http')) {
        return (
            <RebassLink
                target="_blank"
                className={linkStyle}
                href={to}
                sx={{ ...sx }}
                {...rest}
            >
                {children}
            </RebassLink>
        )
    } else {
        return (
            <Box sx={{ display: 'inline', ...sx }}>
                <ReactRouterLink to={to} className={linkStyle} {...rest}>
                    {children}
                </ReactRouterLink>
            </Box>
        )
    }
}

export default Link
