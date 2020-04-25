import React from 'react'
import PageLayout from './PageLayout'
import UserCard from './UserCard'
import users from '../data/users.json'



const Members = () => (
  <PageLayout>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
      {Object.values(users).map((user) => (<UserCard user={user}/>))}
    </div>
  </PageLayout>
)

export default Members
