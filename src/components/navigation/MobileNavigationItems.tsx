import React from 'react'
import { NavigationItemData } from './types'
import { Flex, Box, Button } from 'rebass'
import { NavigationButton } from './NavigationButton'
import { FaTimes } from 'react-icons/fa'
import { NavigationItem } from './NavigationItem'

export function MobileNavigationItems({
    items,
    isAuthenticated,
    close,
}: {
    items: NavigationItemData[]
    isAuthenticated: any
    close: () => void
}) {
    return (
        <Box
            id="navigation--items"
            sx={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'primary',
                width: '80%',
                boxShadow: '0px 3px 6px rgba(92, 92, 92, 0.25)',
                borderRadius: '4px',
            }}
        >
            <Flex flexDirection="column">
                <Flex justifyContent="space-around" pt={1}>
                    <Flex>
                        {!isAuthenticated && (
                            <NavigationButton
                                url={'/signup'}
                                label={'Sign in'}
                            />
                        )}
                        {isAuthenticated && (
                            <NavigationButton
                                url={'/signout'}
                                label={'Sign out'}
                            />
                        )}
                        <NavigationButton
                            url={'/create-project'}
                            label={'Start a project'}
                        />
                    </Flex>
                    <Box alignSelf="flex-end">
                        <Button
                            variant="outline"
                            fontSize="1.5rem"
                            pt="2"
                            onClick={close}
                        >
                            <FaTimes />
                        </Button>
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    sx={{ backgroundColor: 'primaryLight' }}
                >
                    {items.map(item => {
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
            </Flex>
        </Box>
    )
}
