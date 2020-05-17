import Home from 'pages/home/home'
import ProjectProfile from 'pages/projects/profile'
import CreateProject from 'pages/projects/createProject'
import MemberProfile from 'pages/members/profile'
import Projects from 'pages/projects/projects'
import Members from 'pages/members/members'
import SignUpForm from 'pages/signup/signup'

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
        component: CreateProject,
        path: '/create-project',
    },
]
