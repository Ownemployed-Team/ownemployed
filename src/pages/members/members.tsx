import React, { useState } from 'react'
import { Box, Flex } from 'rebass'

import { useLazyQuery } from '@apollo/react-hooks'
import { GET_USERS } from 'graphql/get-users'

import Card from 'components/Card'
import Text from 'components/Text'
import ItemsCount from 'components/ItemsCount'
import Pagination from 'components/Pagination'
import PageLayout from 'components/PageLayout'
import MemberFilter from 'components/MemberFilter'
import UserCard, { User } from '../../components/UserCard'

const Hero = () => {
    return (
        <Card
            sx={{
                borderRadius: '0',
                my: 4,
                mx: 2,
                p: 4,
                textAlign: 'center',
            }}
        >
            <Text as="h2">Find Members</Text>
            <Text as="body" sx={{ width: '50%', m: 'auto' }}>
                Look for Ownemployed members to collaborate with, or for others
                who share your interests.
            </Text>
        </Card>
    )
}

const Filters = ({
    onSubmit,
    members,
}: {
    onSubmit: Function
    members: User[]
}) => {
    return (
        <Box>
            <MemberFilter onSubmitSearch={onSubmit} />
            <Box
                sx={{
                    mx: 'auto',
                    px: 2,
                    py: 2,
                }}
            >
                <ItemsCount items={members} size={10} />
            </Box>
            <Flex flexWrap="wrap">
                {members.map((member, index) => (
                    <Box
                        key={index}
                        mr="auto"
                        width={[1, 1 / 2, 1 / 4]}
                        px={2}
                        py={3}
                    >
                        <UserCard user={member} />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

const Members = () => {
    const [searchWord, setSearchWord] = useState()

    const [getUsersQuery, result] = useLazyQuery(GET_USERS)
    const { loading, called, data = {} } = result

    if (called && loading) {
        return (
            <PageLayout>
                <Text> Loading </Text>
            </PageLayout>
        )
    }

    if (!called) {
        getUsersQuery()
    }

    const users = data.getUsers || []

    return (
        <PageLayout>
            <Hero />
            <Filters
                members={users}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        //TODO : call backend to find project with query function getProjects
                        const { search } = values

                        setSearchWord(search)

                        alert(JSON.stringify(values, null, 2))

                        actions.setSubmitting(false)
                    }, 1000)
                }}
            />
            <Pagination items={data} />
        </PageLayout>
    )
}

export default Members
