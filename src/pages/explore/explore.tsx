import React from 'react'
import { Box, Flex } from 'rebass'
import Card from 'components/Card'
import PageLayout from 'components/PageLayout'
import ProjectCard from 'components/ProjectCard'
import Text from 'components/Text'
import projects from 'data/projects.json'
import { useLocation } from 'react-router'
import ProjectFilter from 'components/ProjectFilter'
import { projects as content } from 'data/content.json'
import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'

const { title, summary } = content

const ExploreIdeas = () => {
    // const [getProjects, { loading, data: projectsData }] = useLazyQuery(
    //     GET_PROJECTS,
    //   )
    // const { getProjects: projects } = projectsData || { getProjects : []}

    return (
        <PageLayout>
            <Card
                sx={{
                    borderRadius: '0',
                    my: 4,
                    mx: 2,
                    p: 4,
                    textAlign: 'center',
                }}
            >
                <Text as="h2">{title}</Text>
                <Text as="body" sx={{ width: '50%', m: 'auto' }}>
                    {summary}
                </Text>
            </Card>
            <div>
                <ProjectFilter onGet={() => {}} />
                <Box
                    sx={{
                        mx: 'auto',
                        px: 2,
                        py: 2,
                    }}
                >
                    <Text>Showing 1 to 24 of XXX results</Text>
                </Box>
                <Flex flexWrap="wrap">
                    {!false &&
                        projects &&
                        projects.map(project => (
                            <Box
                                mr="auto"
                                width={[1, 1 / 2, 1 / 3]}
                                px={2}
                                py={3}
                            >
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            </Box>
                        ))}
                </Flex>
            </div>
        </PageLayout>
    )
}
export default ExploreIdeas
