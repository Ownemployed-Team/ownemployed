import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box } from 'rebass'

function UploadImage() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <Box
            sx={{
                borderRadius: '4px',
                border: '1px dashed',
                p: 2,
            }}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <Box sx={{ textAlign: 'center' }}>
                    Image optional
                    <Box>Choose file from computer</Box>
                </Box>
            )}
        </Box>
    )
}

export default UploadImage
