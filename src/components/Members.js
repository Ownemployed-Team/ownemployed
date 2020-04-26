import React from 'react'
import PageLayout from './PageLayout'
import UserCard from './UserCard'
import PageIntro from './PageIntro'
import users from '../data/users.json'

const Members = () => (
  <PageLayout>
    <PageIntro
      title="Meet Our Members"
      summary="Look for Ownemployed members to collaborate with, or for others who share your interests."
      />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
      {Object.values(users).map((user) => (<UserCard key={user.id} user={user}/>))}
    </div>
  </PageLayout>
)

export default Members
