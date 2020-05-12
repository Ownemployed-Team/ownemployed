import React, { ReactChild, ReactChildren, ReactElement } from 'react'
import { Button as RebassButton } from 'rebass'

const Button = ({
    children,
    size,
    type,
    onClick,
}: {
    children: ReactChildren | ReactChild | ReactElement | string[] | string
    size?: string
    type?: string
    //onClick?: (...args: any[]) => void
    onClick?: Function
    style?: object
}) => {
    return (
        <RebassButton
            onClick={onClick}
            sx={{
                backgroundColor: 'primary',
                borderRadius: '4px',
                boxSizing: 'border-box',
                padding: '6px 8px 6px 8px',
                outline: 'none',
                '&:hover': {
                    backgroundColor: 'primaryHover',
                    cursor: 'pointer',
                },
            }}
        >
            {children}
        </RebassButton>
    )
}

export default Button
