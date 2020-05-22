import React, { useState } from 'react'
import { Box, Flex } from 'rebass'

import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'

import Text from 'components/Text'
import Card from 'components/Card'
import ItemsCount from 'components/ItemsCount'
import Pagination from 'components/Pagination'
import ProjectCard from 'components/ProjectCard'
import ProjectFilter from 'components/ProjectFilter'

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
            <Text as="h2">Find Projects</Text>
            <Text as="body" sx={{ width: '50%', m: 'auto' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ... who share your interests.
            </Text>
        </Card>
    )
}

const ProjectsList = ({ projects }) => {
    return (
        <Flex flexWrap="wrap">
            {projects.map((project, index) => (
                <Box
                    key={index}
                    mr="auto"
                    width={[1, 1 / 2, 1 / 4]}
                    px={2}
                    py={3}
                >
                    <ProjectCard project={project} />
                </Box>
            ))}
        </Flex>
    )
}

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
        getProjectsQuery()
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
            <Pagination items={projects} handler={handlePageClick} />
            <ProjectsList projects={projects} />
            <Pagination items={projects} handler={handlePageClick} />
        </>
    )
}

export default AllProjects

function handlePageClick(data, pageSize) {
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
