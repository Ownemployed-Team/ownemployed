import React from 'react'
import { Row, Col } from 'antd'
import PageLayout from './PageLayout'
import UserCard from './UserCard'
import PageIntro from './PageIntro'
import Filter from './Filter'
import {useLocation} from "react-router"
import users from '../data/users.json'
import userTags from "../utils/userTags";
import BusinessCard from "./BusinessCard";

const Members = () => {
  const selectedString = new URLSearchParams(useLocation().search).get("selected") || "[]"
  const selectedArray = JSON.parse(selectedString)
  let selectedUsers = Object.values(users)
  if (selectedArray.length > 0) {
    const selectedSet = new Set(selectedArray)
    selectedUsers = selectedUsers.filter(user =>
      userTags(user)
        .filter(tag => selectedSet.has(tag)).length > 0
    )
  }
  const allUserTags = [...new Set([].concat(...Object.values(users).map(user => userTags(user))))].sort()

  return (
    <PageLayout>
      <PageIntro
        title="Meet Our Members"
        summary="Look for Ownemployed members to collaborate with, or for others who share your interests."
        />
      <Row>
        <Col span={4}>
          <Filter
            baseUrl="/members"
            options={allUserTags}
            selected={selectedArray}
            title='Filter Members by Tag'
            />
        </Col>
        <Col span={20}>
          <Row  justify="space-around" align="top" gutter={[8,24]}>
            {selectedUsers.map((user) => (
              <Col xs={20} sm={16} md={12} lg={8} xl={4} >
                <UserCard key={user.id} user={user} style={{minHeight: "260px"}}/>
              </Col>
            ))}
          </Row>
        </Col>


    </Row>
    </PageLayout>
  )
}

export default Members
