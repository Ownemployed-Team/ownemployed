import React, { useState } from 'react'

import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'

import ItemsCount from 'components/ItemsCount'
import Pagination from 'components/Pagination'
import ProjectFilter from 'components/ProjectFilter'
import Hero from 'components/projects/Hero'
import ProjectsList from 'components/projects/ProjectsList'
import Text from 'components/Text'

const AllProjects = () => {
    const [searchWord, setSearchWord] = useState()
    const [getProjectsQuery, result] = useLazyQuery(GET_PROJECTS)
    const { loading, called, data = {} } = result

    if (called && loading) {
        return (
            <>
                <Text> Loading </Text>
            </>
        )
    }

    if (!called) {
        getProjectsQuery() // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
    }

    const handlePageClick = (data, pageSize) => {
        let selected = data.selected
        let offset = Math.ceil(selected * pageSize)

        console.log(data)

        // getProjectsQuery({
        //     variables: {
        //         ...(searchWord ? { name: searchWord }: undefined)
        //         skip: offset,
        //         limit: pageSize
        //     }
        // })
    }

    const projects = data.getProjects || []

    return (
        <>
            <Hero />
            <ProjectFilter
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
            <ProjectsList projects={projects} />
            <Pagination items={projects} handler={handlePageClick} />
        </>
    )
}

export default AllProjects
