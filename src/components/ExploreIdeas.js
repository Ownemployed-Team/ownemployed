import React from 'react'
import { Row, Col } from 'antd'
import PageLayout from './PageLayout'
import BusinessCard from './BusinessCard'
import businesses from '../data/businesses.json'
import PageIntro from './PageIntro'
import {useLocation} from "react-router"
import Filter from './Filter'
import businessTags from "../utils/businessTags";
import { projects } from '../data/content.json'

const { title, summary } = projects

const ExploreIdeas = () => {
  const selectedString = new URLSearchParams(useLocation().search).get("selected") || "[]"
  const selectedArray = JSON.parse(selectedString)
  let selectedBusinesses = Object.values(businesses)
  if (selectedArray.length > 0) {
    const selectedSet = new Set(selectedArray)
    selectedBusinesses = selectedBusinesses.filter(business =>
      businessTags(business)
        .filter(tag => selectedSet.has(tag)).length > 0
    )
  }
  const allBusinessTags = [...new Set([].concat(...Object.values(businesses).map(business => businessTags(business))))].sort()
  return (
  <PageLayout>
    <PageIntro
      title={title}
      summary={summary}
      actions={[{ text: "Add a Project", onClick: () => {}}]}
      />
    <Row>
      <Col span={4}>
        <Filter
          baseUrl="/projects"
          options={allBusinessTags}
          selected={selectedArray}
          title='Filter Projects by Tag'
          />
      </Col>
      <Col span={20}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {selectedBusinesses.map((business) => (<BusinessCard key={business.id} business={business}/>))}
        </div>
      </Col>
    </Row>

  </PageLayout>
)
}
export default ExploreIdeas
