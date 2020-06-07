import React from 'react'
import { Box } from 'rebass'
import { Field } from 'formik'
import Text from 'components/Text'

const BasicInfo = ({
    areaInputField,
    errors,
    locationOptions,
    selectField,
    touched,
}) => (
    <Box>
        <Box my={2}>
            <Field
                as="textarea"
                className={areaInputField}
                name="bio"
                placeholder="Bio"
            />
            <Text as="body">
                Give a brief description about yourself and what you do. Max 100
                characters.
            </Text>
            {errors.bio && touched.bio ? (
                <Text
                    sx={{
                        color: 'red',
                    }}
                >
                    {errors.bio}
                </Text>
            ) : null}
        </Box>
        <Box my={4}>
            <Field as="select" className={selectField} name="location">
                <option value={0}>{'Location'}</option>
                {locationOptions &&
                    locationOptions.map(({ label, value }) => (
                        <option value={value}>{label}</option>
                    ))}
            </Field>
            <Text as="body">Select the country you are based in.</Text>
            {errors.location && touched.location ? (
                <Text
                    sx={{
                        color: 'red',
                    }}
                >
                    {errors.location}
                </Text>
            ) : null}
        </Box>
        <Box
            my={4}
            sx={{
                borderRadius: 4,
                border: '1px solid hsl(0, 0%, 80%)',
            }}
        >
            <Box width={[1, 1, 1]}>
                <Box m={2}>
                    <Text as="body">
                        Are you interested in working with people based in
                        different locations?
                    </Text>
                </Box>
                <Box m={2} width={[1 / 2, 1 / 2, 1]}>
                    <Field
                        as="input"
                        name="userType"
                        type="radio"
                        value="true"
                    ></Field>
                    Yes, I'm interested in working remotely
                </Box>
                <Box m={2} width={[1 / 2, 1 / 2, 1]}>
                    <Field
                        as="input"
                        name="userType"
                        type="radio"
                        value="false"
                    ></Field>
                    No, I only want to work with people in my location.
                </Box>
            </Box>
        </Box>
    </Box>
)

export default BasicInfo
