import React, { useState } from 'react'
import { Box, Flex } from 'rebass'

import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'

import Text from 'components/Text'
import Card from 'components/Card'
import ItemsCount from 'components/ItemsCount'
import PageLayout from 'components/PageLayout'
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

const Filters = ({ onSubmit, projects }) => {
    return (
        <Box>
            <ProjectFilter onSubmitSearch={onSubmit} />
            <Box
                sx={{
                    mx: 'auto',
                    px: 2,
                    py: 2,
                }}
            >
                <ItemsCount items={projects} size={10} />
            </Box>
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
        </Box>
    )
}

const Projects = () => {
    const [searchWord, setSearchWord] = useState()
    const [getProjectsQuery, result] = useLazyQuery(GET_PROJECTS)
    const { loading, called, data = {} } = result

    if (called && loading) {
        return (
            <PageLayout>
                <Text> Loading </Text>
            </PageLayout>
        )
    }

    if (!called) {
        getProjectsQuery()
    }

    const projects = data.getProjects || []

    return (
        <PageLayout>
            <Hero />
            <Filters
                projects={projects}
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

export default Projects
