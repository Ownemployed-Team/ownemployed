import React, { useState } from 'react'
// import { jsx } from '@emotion/core'
import { css } from 'emotion'
import { Box, Flex } from 'rebass'
import Card from 'components/Card'
import PageLayout from 'components/PageLayout'
import MemberCard from 'components/MemberCard'
import Text from 'components/Text'
import members from 'data/members.json'
import ReactPaginate from 'react-paginate'
import { useLocation } from 'react-router'
import MemberFilter from 'components/MemberFilter'
import { members as content } from 'data/content.json'
import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'

const { title, summary } = content

const Members = () => {
    const [searchWord, setSearchWord] = useState()
    const pageSize = 9
    // const [getProjects, { loading, data: projectsData }] = useLazyQuery(
    //     GET_PROJECTS,
    //   )
    // const { getProjects: projects } = projectsData || { getProjects : []}
    const pageCount = Math.ceil(members.length / pageSize)
    const handlePageClick = data => {
        let selected = data.selected
        let offset = Math.ceil(selected * pageSize)

        // getProjects({
        //     variables: {
        //         ...(searchWord ? { name: searchWord }: undefined)
        //         skip: offset,
        //         limit: pageSize
        //     }
        // })
    }

    const handleSearchSubmit = (values, actions) => {
        setTimeout(() => {
            //TODO : call backend to find project with query function getProjects
            const { search } = values
            setSearchWord(search)
            // getProjects({
            // 	variables: {
            // 		name: search

            // 	}
            // })
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }

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
            <Box>
                <MemberFilter onSubmitSearch={handleSearchSubmit} />
                <Box
                    sx={{
                        mx: 'auto',
                        px: 2,
                        py: 2,
                    }}
                >
                    <Text>
                        Showing {members.length} to 9 of {'22'} results
                    </Text>
                </Box>
                <Flex flexWrap="wrap">
                    {!false &&
                        members &&
                        members.map(member => (
                            <Box
                                key={member.id}
                                mr="auto"
                                width={[1, 1 / 2, 1 / 4]}
                                px={2}
                                py={3}
                            >
                                <MemberCard member={member} />
                            </Box>
                        ))}
                </Flex>
            </Box>
            <Flex justifyContent={'space-between'}>
                <Box>
                    <Text as="h3">
                        Showing {members.length} to 9 of {'22'} results
                    </Text>
                </Box>
                <Box>
                    <ReactPaginate
                        className={css`
                            display: inline-block;
                        `}
                        previousLabel={'<'}
                        previousClassName={css`
                            display: inline-block;
                            margin: 10px;
                        `}
                        nextLabel={'>'}
                        nextClassName={css`
                            display: inline-block;
                            margin: 10px;
                        `}
                        breakLabel={'...'}
                        breakClassName={css``}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={css`
                            display: inline-block;
                            padding-left: 15px;
                            padding-right: 15px;
                        `}
                        pageClassName={css`
                            display: inline-block;
                            width: 36px;
                            height: 36px;
                            padding: 8px;
                            text-align: center;
                        `}
                        subContainerClassName={css`
                            display: inline-block;
                        `}
                        activeClassName={css`
                            display: inline-block;
                            border-radius: 50%;
                            background-color: #768598;
                            color: white;
                        `}
                    />
                </Box>
            </Flex>
        </PageLayout>
    )
}
export default Members
