import React from 'react'
import { Row, Col } from 'antd'
import PageLayout from './PageLayout'
import UserCard from './UserCard'
import PageIntro from './PageIntro'
import Filter from './Filter'
import {useLocation} from "react-router"
import users from '../data/users.json'

const Members = () => {
  const selectedString = new URLSearchParams(useLocation().search).get("selected") || "[]"
  const selectedArray = JSON.parse(selectedString)
  console.log(selectedArray)

  return (
    <PageLayout>
      <PageIntro
        title="Meet Our Members"
        summary="Look for Ownemployed members to collaborate with, or for others who share your interests."
        />
      <Row>
        <Col span={8}>
          <Filter
            baseUrl="/members"
            options={['Volunteering', 'Brand Management', 'Blockchain']}
            selected={selectedArray}
            title='Filter Members by Tag'
            />
        </Col>
        <Col span={16}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.values(users).map((user) => (<UserCard key={user.id} user={user}/>))}
          </div>
        </Col>
    </Row>
    </PageLayout>
  )
}

export default Members
