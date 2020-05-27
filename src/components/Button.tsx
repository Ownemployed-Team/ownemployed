import React, { ReactChild, ReactChildren, ReactElement } from 'react'
import { Button as RebassButton } from 'rebass'

const Button = ({
    children,
    variant,
    onClick,
    sx,
}: {
    children: ReactChildren | ReactChild | ReactElement | string[] | string
    //onClick?: (...args: any[]) => void,
    variant?: string
    onClick?: Function
    style?: object
    sx?: object
}) => {
    return (
        <RebassButton
            onClick={onClick}
            variant={variant || 'primary'}
            sx={{
                ...sx,
            }}
        >
            {children}
        </RebassButton>
    )
}

export default Button
