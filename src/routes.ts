import Home from 'pages/home/home'
import ProjectProfile from 'pages/business/profile'
import UserProfile from 'pages/user/profile'
import ExploreIdeas from 'pages/explore/explore'
import Members from 'pages/members/members'
import SignUpForm from 'pages/signup/signup'

export default [
    {
        component: Home,
        path: '/',
        exact: true,
    },
    {
        component: ExploreIdeas,
        path: '/projects',
        exact: true,
    },
    {
        component: Members,
        path: '/members',
        exact: true,
    },
    {
        component: ProjectProfile,
        path: '/projects/:projectProfileId',
    },
    {
        component: UserProfile,
        path: '/members/:userProfileId',
    },
    {
        component: SignUpForm,
        path: '/sign-up',
    },
]
