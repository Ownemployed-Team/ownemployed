import React, { useState } from 'react'

import { useLazyQuery } from '@apollo/react-hooks'
import { GET_USERS } from 'graphql/get-users'

import Text from 'components/Text'
import Pagination from 'components/Pagination'
import Filters from 'components/members/Filters'
import Hero from 'components/members/Hero'

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
            <Pagination items={users} handler={handlePageClick} />
        </>
    )
}

export default AllMembers
