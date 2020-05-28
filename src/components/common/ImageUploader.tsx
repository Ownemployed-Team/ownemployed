import React, { useState } from 'react'
import { Box, Button } from 'rebass'
import { Input } from '@rebass/forms'
import { useConfig } from 'config/Context'
import { uploadImage } from 'lib/media'

const ImageUploader = () => {
    const { cloudinaryAPIEndpoint } = useConfig()

    const [file, setFile] = useState(null)

    const uploadURL = `${cloudinaryAPIEndpoint}/image/upload`

    return (
        <Box
            as="form"
            onSubmit={e => {
                e.preventDefault()
                uploadImage(file, uploadURL)
            }}
        >
            <Input
                // TODO refactor this so it looks nicer
                type="file"
                onChange={event => {
                    setFile(event.target.files[0])
                }}
            />
            <Button type="submit">Submit</Button>
        </Box>
    )
}

export default ImageUploader
