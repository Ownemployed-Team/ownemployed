import React, { useState } from 'react'
import { Box } from 'rebass'
import { useLazyQuery } from '@apollo/react-hooks'
import { GET_USERS } from 'graphql/get-users'

import Hero from 'components/members/Hero'
import ItemsCount from 'components/ItemsCount'
import MemberFilter from 'components/members/MemberFilter'
import MembersList from 'components/members/MembersList'
import Pagination from 'components/Pagination'
import Text from 'components/Text'

const AllMembers = () => {
    const [searchWord, setSearchWord] = useState()

    const [getUsersQuery, result] = useLazyQuery(GET_USERS)
    const { loading, called, data = {} } = result

    if (called && loading) {
        return (
            <>
                <Text> Loading </Text>
            </>
        )
    }

    if (!called) {
        getUsersQuery()
    }

    const handlePageClick = (data, pageSize) => {
        let selected = data.selected
        let offset = Math.ceil(selected * pageSize)

        console.log(data)

        // getProjects({
        //     variables: {
        //         ...(searchWord ? { name: searchWord }: undefined)
        //         skip: offset,
        //         limit: pageSize
        //     }
        // })
    }

    const users = data.getUsers || []

    return (
        <>
            <Hero />
            <Box>
                <MemberFilter
                    onSubmitSearch={(values, actions) => {
                        setTimeout(() => {
                            //TODO : call backend to find project with query function getProjects
                            const { search } = values

                            setSearchWord(search)

                            alert(JSON.stringify(values, null, 2))

                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                />
                <Box
                    sx={{
                        mx: 'auto',
                        px: 2,
                        py: 2,
                    }}
                >
                    <ItemsCount items={users} size={10} />
                </Box>
            </Box>
            <MembersList members={users} />
            <Pagination items={users} handler={handlePageClick} />
        </>
    )
}

export default AllMembers
