import React from 'react'
import { NavLink } from 'components/NavLink'
import { Flex, Image, Link as RebassLink } from 'rebass'
import logo from 'static/ownemployed_logo.png'
import { useAuth0 } from 'lib/react-auth0-spa'
import { BsList } from 'react-icons/bs'
import { useIsMobile } from 'hooks/useIsMobile'
import { NavigationItemData } from './navigation/types'
import { NavigationItems } from './navigation/NavigationItems'
import { MobileNavigationItems } from './navigation/MobileNavigationItems'

const FIND_PROJECTS = {
    label: 'Find Projects',
    url: '/projects',
    subtext: 'Find projects that are right for you and need your help.',
}
const FIND_MEMBERS = {
    label: 'Find Members',
    url: '/members',
    subtext: 'Find people with the skills your project needs.',
}
const COMMUNITY = { label: 'Community', url: 'https://ownemployed.tribe.so/' }

const MOBILE_MENU_ITEMS: NavigationItemData[] = [
    FIND_PROJECTS,
    FIND_MEMBERS,
    COMMUNITY,
]

const MENU_ITEMS: NavigationItemData[] = [
    FIND_PROJECTS,
    FIND_MEMBERS,
    // { label: 'Learn', url: '/learn' },
    COMMUNITY,
    { label: 'Account', url: '/profile', isPrivate: true },
    { label: 'Create project', url: '/create-project', isPrivate: true },
    { label: 'My Account', url: '/signup', isAuth: true },
]

const Brand = () => {
    return (
        <NavLink to="/">
            <Image alt="logo" src={logo} width="245px" id="navigation--logo" />
        </NavLink>
    )
}

const NavigationBar = () => {
    const { isAuthenticated } = useAuth0()
    const isMobile = useIsMobile()

    const [show, setShow] = React.useState(false)

    return (
        <Flex
            color="black"
            alignItems={['strech', 'center']}
            bg="#fff"
            flexDirection={['column', 'row']}
            justifyContent="space-around"
            id="navigation-header"
            width="100%"
        >
            <Flex
                pl={[0, 5]}
                pr={[0, 5]}
                flexDirection={['row', 'column']}
                justifyContent="space-around"
            >
                <Brand />
                <RebassLink
                    variant="nav"
                    onClick={() => setShow(!show)}
                    display={['visble', 'none']}
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        alignSelf: 'flex-end',
                        fontSize: '2rem',
                    }}
                >
                    <BsList />
                </RebassLink>
            </Flex>

            {isMobile && show && (
                <MobileNavigationItems
                    items={MOBILE_MENU_ITEMS}
                    isAuthenticated={isAuthenticated}
                    close={() => setShow(false)}
                />
            )}
            {!isMobile && (
                <NavigationItems
                    items={MENU_ITEMS}
                    isAuthenticated={isAuthenticated}
                />
            )}
        </Flex>
    )
}

export default NavigationBar
