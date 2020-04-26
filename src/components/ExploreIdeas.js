import React from 'react'
import PageLayout from './PageLayout'
import BusinessCard from './BusinessCard'
import businesses from '../data/businesses.json'
import PageIntro from './PageIntro'

const ExploreIdeas = () => (
  <PageLayout>
    <PageIntro
      title="Search among OwnEmployed's business ideas!"
      summary="Our entrepreneurs share their stories behind how they've started and grown profitable online businesses.
      Follow others and make a connection!"
      actions={[{ text: "Add Your Product", onClick: () => {}}]}
      />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
      {Object.values(businesses).map((business) => (<BusinessCard key={business.id} business={business}/>))}
    </div>
  </PageLayout>
)

export default ExploreIdeas
