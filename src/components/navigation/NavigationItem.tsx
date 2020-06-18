import React from 'react'
import { Text } from 'components/Text'
import { Link as RebassLink } from 'rebass'

export function NavigationItem(props: {
    url: string
    label: string
    subtext?: string
}) {
    return (
        <RebassLink
            className="navigation--item"
            key={props.url}
            href={props.url}
            p={2}
            sx={{
                color: ['white', 'primary'],
                ':visited': { color: ['white', 'primary'] },
                textDecoration: ['none', 'underline'],
                fontWeight: ['bold', 'normal'],
                backgroundColor: ['primaryLight', 'white'],
            }}
        >
            {props.label}
            {props.subtext && (
                <Text
                    className="navigation--subtext"
                    sx={{
                        color: 'secondaryGrey',
                        display: ['block', 'none'],
                    }}
                >
                    {props.subtext}
                </Text>
            )}
        </RebassLink>
    )
}
