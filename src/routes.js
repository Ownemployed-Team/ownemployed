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
    path: '/explore-ideas'
  },
  {
    component: Members,
    path: '/members'
  },
  {
    component: BusinessProfile,
    path: '/business-profile/:businessProfileId'
  },
  {
    component: UserProfile,
    path: '/user-profile/:userProfileId'
  }
]