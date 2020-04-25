import React from 'react'
import { Typography, Button } from 'antd'
import PageLayout from './PageLayout'
import BusinessCard from './BusinessCard'
import businesses from '../data/businesses.json'

const { Title, Paragraph } = Typography

const ExploreIdeas = () => (
  <PageLayout>
    <div style={{ textAlign: 'center' }}>
      <Title level={3}>Search among OwnEmployed's business ideas!</Title>
      <Paragraph>
        Our entrepreneurs share their stories behind how they've started and grown profitable online businesses.
        Follow others and make a connection!
      </Paragraph>
      <Button>Add Your Product</Button>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
      {Object.values(businesses).map((business) => (<BusinessCard business={business} style={{ width: '300px', margin: '8px' }}/>))}
    </div>
  </PageLayout>
)

export default ExploreIdeas
