import React, {
    FunctionComponent,
    ReactChild,
    ReactChildren,
    ReactElement,
} from 'react'
import { Card as RebassCard } from 'rebass'

type CardProps = {
    children?:
        | ReactChildren
        | ReactElement
        | ReactChild
        | ReactChildren[]
        | ReactElement[]
        | ReactChild[]
        | Function
        | boolean
        | any
    variant?: string
    style?: object
    sx?: object
}

const Card: FunctionComponent<CardProps> = ({
    children,
    variant,
    style = {},
    sx,
}) => {
    return (
        <RebassCard
            style={style}
            variant={variant || 'card.primary'}
            sx={{
                ...sx,
            }}
        >
            {children}
        </RebassCard>
    )
}

export default Card
