import React from 'react'
import { Box, Flex } from 'rebass'
import MemberFilter from 'components/MemberFilter'
import ItemsCount from 'components/ItemsCount'
import MemberCard from 'components/MemberCard'

const Filters = ({ onSubmit, members }) => {
    return (
        <Box>
            <MemberFilter onSubmitSearch={onSubmit} />
            <Box
                sx={{
                    mx: 'auto',
                    px: 2,
                    py: 2,
                }}
            >
                <ItemsCount items={members} size={10} />
            </Box>
            <Flex flexWrap="wrap">
                {members.map((member, index) => (
                    <Box
                        key={index}
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
    )
}

export default Filters
