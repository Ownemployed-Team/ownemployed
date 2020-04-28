import React from 'react'
import {Row, Col} from 'antd'
import PageLayout from './PageLayout'
import BusinessCard from './BusinessCard'
import businesses from '../data/businesses.json'
import PageIntro from './PageIntro'
import {useLocation} from "react-router"
import Filter from './Filter'
import businessTags from "../utils/businessTags";
import {projects} from '../data/content.json'

const {title, summary} = projects

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
        actions={[{
          text: "Add a Project", onClick: () => {
          }
        }]}
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

        <Col span={20} >
          <Row  justify="space-around" align="top" gutter={[24,24]}>
            {selectedBusinesses.map((business) => (
              <Col xs={20} sm={16} md={12} lg={10} xl={6}>
                <BusinessCard
                  key={business.id}
                  business={business}
                  style={{minHeight:"150px"}}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

    </PageLayout>
  )
}
export default ExploreIdeas
