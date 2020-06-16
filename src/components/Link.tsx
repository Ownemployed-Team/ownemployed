import React, { FunctionComponent, ReactNode } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as RebassLink, Box, SxStyleProp } from 'rebass'

type LinkProps = {
    children: ReactNode
    className?: string
    props?: any
    style?: object
    sx?: SxStyleProp
    to: string
    variant?: string
}
const defaultStyles = {
    textDecoration: 'none',
}
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
                href={to}
                variant={variant || 'primary'}
                sx={{ ...defaultStyles, ...sx }}
                {...props}
            >
                {children}
            </RebassLink>
        )
    } else {
        return (
            <Box sx={{ display: 'inline', ...defaultStyles, ...sx }}>
                <ReactRouterLink to={to} {...props}>
                    {children}
                </ReactRouterLink>
            </Box>
        )
    }
}

export default Link
