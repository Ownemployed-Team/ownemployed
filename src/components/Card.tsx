import React, {
    FunctionComponent,
    ReactChild,
    ReactChildren,
    ReactElement,
} from 'react'
import { Card as RebassCard, SxStyleProp } from 'rebass'

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
    sx?: SxStyleProp
}

const Card: FunctionComponent<CardProps> = ({ children, variant, sx }) => {
    return (
        <RebassCard
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
