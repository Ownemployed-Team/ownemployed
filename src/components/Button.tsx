import React from 'react'
import { Button as RebassButton, SxStyleProp } from 'rebass'

const Button = ({
    children,
    variant,
    onClick,
    sx,
    type,
}: {
    children: React.ReactNode
    variant?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?: object
    sx?: SxStyleProp
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
