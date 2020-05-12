import React, {
    ReactChildren,
    ReactChild,
    ReactElement,
    FunctionComponent,
} from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as RebassLink } from 'rebass'

type LinkProps = {
    children: ReactChildren | ReactElement | ReactChild
    className?: string
    to: string
    sx?: object
    css?: object
    rest?: any
    style?: object
}

export const Link: FunctionComponent<LinkProps> = ({
    children,
    to,
    ...rest
}) => {
    if (to.startsWith('http')) {
        return (
            <RebassLink href={to} target="_blank" {...rest}>
                {children}
            </RebassLink>
        )
    } else {
        return (
            <ReactRouterLink
                to={to}
                style={{ textDecoration: 'none' }}
                {...rest}
            >
                {children}
            </ReactRouterLink>
        )
    }
}

export default Link
