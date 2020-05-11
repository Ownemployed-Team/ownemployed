import React, {
    ReactChildren,
    ReactChild,
    ReactElement,
    FunctionComponent,
} from 'react'
import { Link as RebassLink } from 'rebass'
import { Link as RouterLink } from 'react-router-dom'

type LinkProps = {
    children: ReactChildren | ReactElement | ReactChild
    to: string
    className?: string
    sx?: object
    css?: object
    rest?: any
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
            <RouterLink
                to={to}
                style={{
                    textDecoration: 'none',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: 'black',
                }}
                {...rest}
            >
                {children}
            </RouterLink>
        )
    }
}
export default Link
