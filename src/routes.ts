import GDPR from 'pages/gdpr'
import Home from 'pages/home/home'
import MemberProfile from 'pages/members/profile'
import Members from 'pages/members/members'
import ProjectProfile from 'pages/projects/profile'
import Projects from 'pages/projects/projects'
import SignUpForm from 'pages/signup/signup'
import TOS from 'pages/tos'

export default [
    {
        component: Home,
        path: '/',
        exact: true,
    },
    {
        component: Projects,
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
        component: MemberProfile,
        path: '/members/:memberProfileId',
    },
    {
        component: SignUpForm,
        path: '/sign-up',
    },
    {
        component: TOS,
        path: '/tos',
    },
    {
        component: GDPR,
        path: '/gdpr',
    },
]
