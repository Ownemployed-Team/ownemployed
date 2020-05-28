import React from 'react'
import { Box, Flex } from 'rebass'
import UserCard from 'components/UserCard'

const MembersList = ({ members }) => {
    return (
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
    )
}

export default MembersList
