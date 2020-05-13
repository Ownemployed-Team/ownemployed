import React, {
    ReactChildren,
    ReactChild,
    ReactElement,
    FunctionComponent,
} from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as RebassLink } from 'rebass'
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
            <ReactRouterLink to={to} className={linkStyle} {...rest}>
                {children}
            </ReactRouterLink>
        )
    }
}

export default Link
