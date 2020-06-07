import About from 'pages/about/about'
import CreateProjectPage from 'pages/createProjects'
import Home from 'pages/home/home'
import MemberProfile from 'pages/members/profile'
import Members from 'pages/members/members'
import ProjectProfile from 'pages/projects/profile'
import Projects from 'pages/projects/projects'
import TermsOfUse from 'pages/termsOfUse/termsOfUse'

export default [
    {
        component: About,
        path: '/about',
        exact: true,
    },
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
        component: CreateProjectPage,
        path: '/create-project',
    },
    {
        component: TermsOfUse,
        path: '/terms-of-use',
    },
]
