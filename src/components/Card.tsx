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
    style?: object
    sx?: object
}

const Card: FunctionComponent<CardProps> = ({ children, style = {}, sx }) => {
    return (
        <RebassCard
            style={style}
            sx={{
                backgroundColor: 'white',
                boxShadow: 'small',
                borderRadius: 'default',
                width: 'auto',
                padding: 2,
                ...sx,
            }}
        >
            {children}
        </RebassCard>
    )
}

export default Card
