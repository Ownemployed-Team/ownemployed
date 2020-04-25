import Home from './components/Home'
import BusinessProfile from './components/BusinessProfile'
import UserProfile from './components/UserProfile'
import ExploreIdeas from './components/ExploreIdeas'

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
    component: BusinessProfile,
    path: '/business-profile'
  },
  {
    component: UserProfile,
    path: '/user-profile/:userProfileId'
  }
]