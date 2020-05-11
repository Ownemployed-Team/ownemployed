import React from 'react'
import { Button as RebassButton } from 'rebass'

const Button = ({
    label,
    size,
    type,
    onClick,
}: {
    label: string
    size?: string
    type?: string
    onClick?: (...args: any[]) => void
}) => {
    return (
        <RebassButton
            onClick={onClick}
            sx={{
                backgroundColor: 'primary',
                borderRadius: '4px',
                boxSizing: 'border-box',
                padding: '6px 8px 6px 8px',
                '&:hover': {
                    backgroundColor: 'primaryHover',
                    cursor: 'pointer',
                },
            }}
        >
            {label}
        </RebassButton>
    )
}

export default Button
