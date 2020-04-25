import React from 'react'
import PageLayout from './PageLayout'
import UserCard from './UserCard'
import users from '../data/users.json'



const Members = () => (
  <PageLayout>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
      {Object.values(users).map((user) => (<UserCard user={user}
                                                     style={{ height: '300px', width: '300px', margin: '16px', padding: '24px' }}
      />))}
    </div>
  </PageLayout>
)

export default Members
