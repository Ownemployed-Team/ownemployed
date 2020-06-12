import React, { ReactChild, ReactChildren, ReactElement } from 'react'
import { Button as RebassButton } from 'rebass'

const Button = ({
    children,
    variant,
    onClick,
    sx,
    type,
}: {
    children: ReactChildren | ReactChild | ReactElement | string[] | string
    //onClick?: (...args: any[]) => void,
    variant?: string
    onClick?: Function
    style?: object
    sx?: object
    type?: string
}) => {
    return (
        <RebassButton
            onClick={onClick}
            variant={variant || 'primary'}
            sx={{
                ...sx,
            }}
            type={type}
        >
            {children}
        </RebassButton>
    )
}

export default Button
