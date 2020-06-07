import React from 'react'
import { Box, Flex, Image } from 'rebass'
import { Field } from 'formik'
import Text from 'components/Text'
import ImageUploader from 'components/common/ImageUploader'

const AvatarImage = ({
    avatarImage,
    onUploadedImage,
    normalInputField,
    errors,
    touched,
}) => (
    <Flex flexDirection={['column-reverse', 'column-reverse', 'row']}>
        <Box width={[1, 1, 2 / 3]}>
            <Box my={4} mr={[0, 0, 2]} width={[1, 1, 1]}>
                <Field
                    className={normalInputField}
                    name="firstName"
                    placeholder="First name"
                />
                {errors.firstName && touched.firstName ? (
                    <Text
                        sx={{
                            color: 'red',
                        }}
                    >
                        {errors.firstName}
                    </Text>
                ) : null}
            </Box>
            <Box my={4} width={[1, 1, 1]}>
                <Field
                    className={normalInputField}
                    name="lastName"
                    placeholder="Last name"
                />
                {errors.lastName && touched.lastName ? (
                    <Text
                        sx={{
                            color: 'red',
                        }}
                    >
                        {errors.lastName}
                    </Text>
                ) : null}
            </Box>
            <Box my={4} width={[1, 1, 1]}>
                <Field
                    className={normalInputField}
                    name="headline"
                    placeholder="Headline"
                />
                {errors.headline && touched.headline ? (
                    <Text
                        sx={{
                            color: 'red',
                        }}
                    >
                        {errors.headline}
                    </Text>
                ) : null}
                <Box m={2}>
                    <Text as="body">
                        Our members will see this when they search for people to
                        help with their projects and when viewing your profile.
                        You can see examples of people’s headlines on the find
                        people page.
                    </Text>
                </Box>
            </Box>
            <Box my={4} width={[1, 1, 1]}>
                <Field
                    className={normalInputField}
                    name="education"
                    placeholder="Education"
                ></Field>
                <Text as="body">Add education</Text>
                {errors.education && touched.education ? (
                    <Text
                        sx={{
                            color: 'red',
                        }}
                    >
                        {errors.education}
                    </Text>
                ) : null}
            </Box>
        </Box>
        <Box mx={[0, 0, 4]} width={[1, 1, 1 / 3]}>
            <Box my={4} width={[1, 1, 1]}>
                {avatarImage ? (
                    <Image
                        src={avatarImage}
                        sx={{
                            mx: 'auto',
                            verticalAlign: 'middle',
                            width: '100px',
                            height: '100px',
                        }}
                    />
                ) : (
                    <Image
                        sx={{
                            mx: 'auto',
                            verticalAlign: 'middle',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            bg: 'primaryHover',
                        }}
                    />
                )}
            </Box>
            <Box m={[0, 0, 0]} width={[1, 1, 1]}>
                <ImageUploader
                    isTextAbove
                    onUploadedImage={onUploadedImage}
                ></ImageUploader>
            </Box>
        </Box>
    </Flex>
)

export default AvatarImage
