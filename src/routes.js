import Home from './components/Home'
import BusinessProfile from './components/BusinessProfile'
import UserProfile from './components/UserProfile'
import ExploreIdeas from './components/ExploreIdeas'
import Members from './components/Members'

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
    component: BusinessProfile,
    path: '/projects/:businessProfileId'
  },
  {
    component: UserProfile,
    path: '/members/:userProfileId'
  }
]