import React from 'react'
import { Box } from 'rebass'
import { Field } from 'formik'
import Select from 'react-select'
import Checkbox from 'components/Checkbox'
import Text from 'components/Text'

const DetailedInfo = ({
    defaultNormalInputFieldStyle,
    errors,
    onSetFieldValue,
    onSkillsSelected,
    selectClass,
    skills,
    skillsOptions,
    styles,
    touched,
    values,
}) => (
    <Box>
        <Box my={4}>
            <Select
                className={selectClass}
                classNamePrefix="select"
                closeMenuOnSelect={false}
                isMulti
                name="skills"
                onChange={onSkillsSelected}
                options={skillsOptions}
                placeholder={'Skills'}
                styles={styles}
                value={skills}
            />
            <Text as="body">Search for skills</Text>
            {errors.skills && touched.skills ? (
                <Text
                    sx={{
                        color: 'red',
                    }}
                >
                    {errors.skills}
                </Text>
            ) : null}
        </Box>
        <Box my={4} mr={[0, 0, 2]} width={[1, 1, 1]}>
            <Field
                className={defaultNormalInputFieldStyle}
                name="linkedin"
                placeholder="Linkedin"
            />
            {errors.linkedin && touched.linkedin ? (
                <Text
                    sx={{
                        color: 'red',
                    }}
                >
                    {errors.linkedin}
                </Text>
            ) : null}
        </Box>
        <Box my={4} mr={[0, 0, 2]} width={[1, 1, 1]}>
            <Field
                className={defaultNormalInputFieldStyle}
                name="website"
                placeholder="Website"
            />
            {errors.website && touched.website ? (
                <Text
                    sx={{
                        color: 'red',
                    }}
                >
                    {errors.website}
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
            <Box m={2}>
                <Text as="body">Email privacy</Text>
                <Field
                    name="emailPrivacy"
                    type="checkbox"
                    checked={values.emailPrivacy}
                    onChange={checkBoxValue => {
                        onSetFieldValue('emailPrivacy', checkBoxValue)
                    }}
                    text={
                        'I want to allow other members to see my email address'
                    }
                    component={Checkbox}
                />
            </Box>
        </Box>
    </Box>
)

export default DetailedInfo
