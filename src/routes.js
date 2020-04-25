import Home from './components/Home'
import BusinessProfile from './components/BusinessProfile'
import UserProfile from './components/UserProfile'

export default [
  {
    component: Home,
    path: '/',
    exact: true,
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