import React from 'react'
import { Grid, Row, Col } from 'antd'
import PageLayout from 'components/PageLayout'
import UserCard_Legacy from 'components/UserCard_Legacy'
import PageIntro from 'components/PageIntro'
import Filter from 'components/Filter'
import { useLocation } from 'react-router'
import users from 'data/users.json'
import userTags from 'utils/userTags'

const { useBreakpoint } = Grid

const Members = () => {
    const selectedString =
        new URLSearchParams(useLocation().search).get('selected') || '[]'
    const selectedArray = JSON.parse(selectedString)
    let selectedUsers = Object.values(users)
    if (selectedArray.length > 0) {
        const selectedSet = new Set(selectedArray)
        selectedUsers = selectedUsers.filter(
            user =>
                userTags(user).filter(tag => selectedSet.has(tag)).length > 0
        )
    }
    const allUserTags = Object.values(users)
        .map(user => userTags(user))
        .sort()

    const screens = useBreakpoint()
    const useFullWidth = !screens.xl

    return (
        <PageLayout>
            <PageIntro
                title="Meet Our Members"
                summary="Look for Ownemployed members to collaborate with, or for others who share your interests."
                actions={[]}
            />
            <Row gutter={[16, 16]}>
                <Col lg={24} xl={4}>
                    <Filter
                        baseUrl="/members"
                        options={allUserTags}
                        selected={selectedArray}
                        title="Filter Members by Tag"
                    />
                </Col>
                <Col lg={24} xl={20} style={{ padding: '0 32px' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: useFullWidth
                                ? 'center'
                                : 'flex-start',
                        }}
                    >
                        {selectedUsers.map(user => (
                            //UserCard_Legacy has to be replaced with the newer UserCard component when the page is getting reworked
                            <UserCard_Legacy key={user.id} user={user} />
                        ))}
                    </div>
                </Col>
            </Row>
        </PageLayout>
    )
}

export default Members
