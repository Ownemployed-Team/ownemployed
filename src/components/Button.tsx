import React from 'react'
import { Button as RebassButton } from 'rebass'

function sizeReturn(size: string | undefined) {
    let width, height
    if (size === 'large') {
        width = '272px'
        height = '56px'
    } else {
        width = '103px'
        height = '34px'
    }

    return { width: width, height: height }
}

function colorTypes(type: string | undefined) {
    let color, hoverColor
    if (type === 'secondary') {
        color = '#FFDA63'
        hoverColor = '#FFE180'
    } else if (type === 'alert') {
        color = '#FF5252'
        hoverColor = '#ff8080'
    } else if (type === 'success') {
        color = '#33d9b2'
        hoverColor = '#53dfbf'
    } else {
        color = '#124780'
        hoverColor = '#16579c'
    }

    return { color: color, hoverColor: hoverColor }
}

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
    const { width, height } = sizeReturn(size) || {
        width: '103px',
        height: '34px',
    }
    const { color, hoverColor } = colorTypes(type) || {
        color: '#124780',
        hoverColor: '#16579c',
    }
    return (
        <RebassButton
            onClick={onClick}
            sx={{
                backgroundColor: color,
                borderRadius: '92px',
                width: width,
                height: height,
                '&:hover': {
                    backgroundColor: hoverColor,
                    cursor: 'pointer',
                },
            }}
        >
            {label}
        </RebassButton>
    )
}

export default Button
