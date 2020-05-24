import React from 'react'
import ReactPaginate from 'react-paginate'
import { Box, Flex } from 'rebass'
import { css } from 'emotion'

import ItemsCount from 'components/ItemsCount'

const pagination = css`
    display: inline-block;
`

const paginationContainer = css`
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
`

const pageChangeButton = css`
    display: inline-block;
    margin: 10px;
    padding: 0;
    & a {
        outline: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        &:active {
            background-color: #ccc;
        }
    }
`

const page = css`
    display: inline-block;
    width: 36px;
    height: 36px;
    padding: 8px;
    text-align: center;
`

const paginationSubContainer = css`
    display: inline-block;
`

const activePage = css`
    display: inline-block;
    border-radius: 50%;
    background-color: #768598;
    color: white;
`
const Pagination = ({ items, handler, perPage = 10 }) => {
    const pageSize = perPage
    const pageCount = Math.ceil(items.length / pageSize)

    return (
        <Flex justifyContent="space-between" width="100%">
            <Box>
                <ItemsCount items={items} size={10} />
            </Box>
            <Box>
                <ReactPaginate
                    //onPageChange={data => handlePageClick(data, pageSize)}
                    onPageChange={data => handler(data, pageSize)}
                    className={pagination}
                    previousClassName={pageChangeButton}
                    nextClassName={pageChangeButton}
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    //breakClassName={pageBreak}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={paginationContainer}
                    pageClassName={page}
                    subContainerClassName={paginationSubContainer}
                    activeClassName={activePage}
                />
            </Box>
        </Flex>
    )
}

export default Pagination
