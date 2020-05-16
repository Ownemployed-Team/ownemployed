import React from 'react'
import { Box, Flex } from 'rebass'
import Card from 'components/Card'
import PageLayout from 'components/PageLayout'
import ProjectCard from 'components/ProjectCard'
import Text from 'components/Text'
import projects from 'data/projects.json'
import businesses from 'data/businesses.json'
import PageIntro from 'components/PageIntro'
import { useLocation } from 'react-router'
import ProjectFilter from 'components/ProjectFilter'
import businessTags from 'utils/businessTags'
import { projects as content } from 'data/content.json'
import { useQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'

const { title, summary } = content
// const { useBreakpoint } = Grid

const ExploreIdeas = () => {
    // const { loading, error, data: projectsData } = useQuery(GET_PROJECTS)
    // const { getProjects: projects } = projectsData || { getProjects : []}

    const selectedString =
        new URLSearchParams(useLocation().search).get('selected') || '[]'
    console.log(selectedString)
    const selectedArray = JSON.parse(selectedString)
    let selectedBusinesses = Object.values(businesses)
    if (selectedArray.length > 0) {
        const selectedSet = new Set(selectedArray)
        selectedBusinesses = selectedBusinesses.filter(
            business =>
                businessTags(business).filter(tag => selectedSet.has(tag))
                    .length > 0
        )
    }
    const allBusinessTags = Object.values(businesses)
        .map(business => businessTags(business))
        .sort()

    // const screens = useBreakpoint()
    // const useFullWidth = !screens.xl

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
                <ProjectFilter
                    baseUrl="/projects"
                    options={allBusinessTags}
                    selected={selectedArray}
                    title="Filter Projects by Tag"
                />
                <Box
                    sx={{
                        mx: 'auto',
                        px: 2,
                        py: 2,
                    }}
                >
                    <Text>Showing 1 to 24 of XXX results</Text>
                </Box>
                {/* <Col lg={24} xl={4}>
                </Col> */}
                {/* <Col style={{ padding: '0 32px' }}> */}
                {/* <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: useFullWidth
                                ? 'center'
                                : 'flex-start',
                        }}
                    > */}
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
                {/* </Col> */}
            </div>
        </PageLayout>
    )
}
export default ExploreIdeas
