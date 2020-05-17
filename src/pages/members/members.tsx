import React from 'react'
import { Flex, Image } from 'rebass'
import { Route, Switch, useParams } from 'react-router-dom'

import PageLayout from 'components/PageLayout'
import Card from 'components/Card'
import Link from 'components/Link'
import Text from 'components/Text'

import { times } from 'utils/lowdash'

const SingleMember = () => {
    const { member_id: memberId } = useParams()

    return (
        <>
            <Text as="h3">Member {memberId}</Text>
            <hr />
        </>
    )
}

const AllMembers = ({ match }) => {
    const members: { id: number; name: string; img: string }[] = []

    times(20, () => {
        members.push({
            id: 0,
            name: 'Franklin Clinton',
            img: 'https://i.picsum.photos/id/518/300/300.jpg?grayscale',
        })
        members.push({
            id: 1,
            name: 'Michael DeSanta',
            img: 'https://i.picsum.photos/id/518/300/300.jpg?grayscale',
        })
        members.push({
            id: 2,
            name: 'Trevor Phillips',
            img: 'https://i.picsum.photos/id/518/300/300.jpg?grayscale',
        })
    })

    return (
        <>
            <Card
                sx={{
                    mt: 2,
                    mb: 2,
                    borderRadius: 'small',
                }}
            >
                <Text as="h3">List of members</Text>
            </Card>
            <Flex flexWrap="wrap" justifyContent="space-around">
                {members.map(member => {
                    return (
                        <Card
                            sx={{
                                mt: 2,
                                mb: 2,
                                width: '30%',
                            }}
                        >
                            <Image
                                src={member.img}
                                borderRadius="default"
                            ></Image>
                            <Link to={`${match.url}/${member.id}`}>
                                {member.name}
                            </Link>
                        </Card>
                    )
                })}
            </Flex>
        </>
    )
}

const Members = ({ match }) => {
    return (
        <PageLayout>
            <Switch>
                <Route path={`${match.url}/`} component={AllMembers} exact />
                <Route
                    path={`${match.url}/:member_id`}
                    component={SingleMember}
                    exact
                />
            </Switch>
        </PageLayout>
    )
}

export default Members

{
    /*
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
 */
}
