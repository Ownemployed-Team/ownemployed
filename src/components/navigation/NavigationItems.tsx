import { NavigationItemData } from './types'
import React from 'react'
import { Flex } from 'rebass'
import { NavigationButton } from './NavigationButton'
import { NavigationItem } from './NavigationItem'

export function NavigationItems({
    items,
    isAuthenticated,
}: {
    items: NavigationItemData[]
    isAuthenticated: any
}) {
    return (
        <Flex
            id="navigation--items"
            sx={{
                flexDirection: ['column', 'row'],
            }}
        >
            {items
                .filter(item => {
                    // NOTE check if private, then return the results of isAuthenticated
                    return item.isPrivate ? isAuthenticated : true
                })
                .map(item => {
                    if (item.isAuth) {
                        return (
                            <NavigationButton
                                key={item.url}
                                url={item.url}
                                label={item.label}
                            />
                        )
                    }
                    return (
                        <NavigationItem
                            key={item.url}
                            url={item.url}
                            label={item.label}
                            subtext={item.subtext}
                        />
                    )
                })}
        </Flex>
    )
}
