import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Button, Flex, Image } from 'rebass'
import Text from 'components/Text'
import { useConfig } from 'config/Context'
import { uploadImage } from 'lib/media'

type UploadImageProps = {
    onUploadedImage?: (resizedImage: String) => void
    isImageVisibleInBox?: Boolean
}
function UploadImage({
    onUploadedImage,
    isImageVisibleInBox = false,
}: UploadImageProps) {
    const [loading, setLoading] = useState(false)
    const [uploadedImage, setUploadedImage] = useState(false)
    const { cloudinaryAPIEndpoint } = useConfig()
    const uploadURL = `${cloudinaryAPIEndpoint}/image/upload`

    const onDrop = useCallback(
        async acceptedFiles => {
            setLoading(true)

            const { secure_url } = await uploadImage(
                acceptedFiles[0],
                uploadURL
            )
            const resizedImage = secure_url.replace(
                '/upload',
                '/upload/w_250,c_scale'
            )

            setLoading(false)
            setUploadedImage(resizedImage)
            if (onUploadedImage) {
                onUploadedImage(resizedImage)
            }
        },
        [onUploadedImage, uploadURL]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <Box
            width={[1 / 2]}
            sx={{
                borderRadius: '4px',
                border: '1px dashed',
                p: 2,
            }}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {loading ? (
                <Text as="body">Loading ...</Text>
            ) : isDragActive ? (
                <Text as="body">Drop the files here ...</Text>
            ) : (
                <Box sx={{ textAlign: 'left' }}>
                    <Box>
                        <Text
                            as="body"
                            sx={{
                                color: '#6F63AD',
                            }}
                        >
                            Image (optional)
                        </Text>
                    </Box>
                    <Flex justifyContent="space-between">
                        <Box>
                            <Text as="body">
                                Drop or choose file from computer
                            </Text>
                        </Box>
                        <Box>
                            <Button>Choose Image</Button>
                        </Box>
                    </Flex>
                    {isImageVisibleInBox && uploadedImage && (
                        <Box width={250}>
                            <Image
                                src={uploadedImage}
                                sx={{
                                    width: ['100%'],
                                }}
                            ></Image>
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    )
}

export default UploadImage
