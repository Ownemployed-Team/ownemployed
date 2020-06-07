import React from 'react'
import { Box } from 'rebass'
import Button from 'components/Button'

const SubmitButton = ({ onSubmitForm }) => (
    <Box
        mx={[0, 0, 0]}
        my={4}
        textAlign={'right'}
        sx={{
            borderRadius: 0,
            borderTop: '1px solid',
        }}
    >
        <Box my={4}>
            <Button sx={{ width: '265px' }} onClick={onSubmitForm}>
                Update Profile
            </Button>
        </Box>
    </Box>
)

export default SubmitButton
