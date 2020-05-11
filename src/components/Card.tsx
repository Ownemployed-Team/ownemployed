import React, { ReactChild, ReactChildren, ReactElement } from 'react'
import { Card as RebassCard } from 'rebass'

const Card = ({
    children,
    width,
    height,
    style,
}: {
    children?:
        | ReactChildren
        | ReactElement
        | ReactChild
        | ReactChildren[]
        | ReactElement[]
        | ReactChild[]
    width?: string
    height?: string
    style?: object
}) => {
    return (
        <RebassCard
            sx={{
                backgroundColor: '#FFFFFF',
                boxShadow: 'small',
                borderRadius: '39px',
                textAlign: 'center',
                padding: '10px',
            }}
            style={style}
            height={height}
            width={width}
        >
            {children}
        </RebassCard>
    )
}

export default Card
