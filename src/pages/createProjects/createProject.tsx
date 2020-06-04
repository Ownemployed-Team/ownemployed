import React, { useState } from 'react'
import { css } from 'emotion'
import { Box } from 'rebass'
import Card from 'components/Card'
import Button from 'components/Button'
import Text from 'components/Text'
import sectorData from 'data/sector.json'
import locationsData from 'data/locations.json'
import projectsStatus from 'data/project-status.json'
import skillsData from 'data/skills.json'
import { Formik, Form, Field } from 'formik'
import { useLazyQuery } from '@apollo/react-hooks'
import ImageUploader from 'components/common/ImageUploader'
import Select from 'react-select'
import * as Yup from 'yup'

const CreateProjectSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    shortDescription: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(140, 'Too Long!')
        .required('Required'),
    projectStatus: Yup.string().required(),
    location: Yup.string().required(),
    sector: Yup.array(),
    skills: Yup.array(),
})

const CreateProject = () => {
    const [sector, setSector] = useState([])
    const [skills, setSkills] = useState([])

    const sectorOptions = sectorData.map(({ id, name }) => ({
        value: id,
        label: name,
    }))
    const skillsOptions = skillsData.map(({ id, name }) => ({
        value: id,
        label: name,
    }))
    const locationOptions = locationsData.map(({ id, name }) => ({
        value: id,
        label: name,
    }))

    const handleSectorSelected = values => {
        setSector(values)
    }

    const handleSkillsSelected = values => {
        setSkills(values)
    }

    const onSubmitSearch = (values, actions) => {
        setTimeout(() => {
            const skillsValues = skills.map(({ value }) => value)
            const sectorValues = sector.map(({ value }) => value)
            const mutatedValues = {
                ...values,
                sector: sectorValues,
                skills: skillsValues,
            }

            //TODO : Add createProject request to BE.
            // const { search } = values
            // createProjects({
            // 	variables: {
            // 		...mutatedValues
            // 	}
            // })

            alert(JSON.stringify(mutatedValues, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }
    const normalInputField = css`
        width: 100%;
        padding: 10px;
        height: 64px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;

        ::placeholder {
            color: #6f63ad;
            vertical-align: top;
        }
    `

    const selectField = css`
        color: #6f63ad;
        width: 100%;
        padding: 10px;
        height: 64px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;

        ::placeholder {
            color: #6f63ad;
            vertical-align: top;
        }
    `

    const areaInputField = css`
        width: 100%;
        padding: 10px;
        height: 100px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;

        ::placeholder {
            color: #6f63ad;
            vertical-align: top;
        }
    `

    const selectLocation = css`
        .select__placeholder {
            color: #6f63ad;
        }
    `

    const styles = {
        control: (base, state) => {
            const { className } = (state || {}).selectProps
            switch (className) {
                case 'sector':
                    return { ...base, width: '100%' }
                case 'skills':
                    return { ...base, width: '100%' }
                case 'location':
                    return { ...base, width: '100%' }
                default:
                    return { ...base, width: '100%' }
            }
        },
        menu: (base, state) => {
            return { ...base, width: 300 }
        },
        multiValue: (base, state) => {
            return state.data.isFixed
                ? { ...base, backgroundColor: 'gray' }
                : base
        },
        multiValueLabel: (base, state) => {
            return state.data.isFixed
                ? {
                      ...base,
                      fontWeight: 'bold',
                      color: 'white',
                      paddingRight: 6,
                  }
                : base
        },
        multiValueRemove: (base, state) => {
            return state.data.isFixed ? { ...base, display: 'none' } : base
        },
    }

    return (
        <Box mx={7} my={2}>
            <Card sx={{ borderRadius: 0, borderBottom: '1px solid' }}>
                <Box mx={6} my={4}>
                    <Text as="h3">Create Project</Text>
                    <Text as="body">
                        Ready to get started? Tell us about your idea.
                    </Text>
                </Box>
            </Card>
            <Card sx={{ borderRadius: 0 }}>
                <Formik
                    initialValues={{
                        name: '',
                        usefulLinks: '',
                        shortDescription: '',
                        imageUrl: '',
                        description: '',
                        projectStatus: '',
                        location: '',
                        sector: [],
                        skills: [],
                    }}
                    onSubmit={onSubmitSearch}
                    validationSchema={CreateProjectSchema}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Box
                                sx={{
                                    borderRadius: 0,
                                    borderBottom: '1px solid',
                                    m: 4,
                                }}
                            >
                                <Box sx={{ mx: 6 }}>
                                    <Box my={4}>
                                        <Field
                                            className={normalInputField}
                                            name="name"
                                            placeholder="Name"
                                        />
                                        {errors.name && touched.name ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.name}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            as="textarea"
                                            className={areaInputField}
                                            name="shortDescription"
                                            placeholder="Short Description"
                                        />
                                        <Text as="body">
                                            Tell us about your project in 140
                                            charachters or less.
                                        </Text>
                                        {errors.shortDescription &&
                                        touched.shortDescription ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.shortDescription}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <ImageUploader isImageVisibleInBox />
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={normalInputField}
                                            name="description"
                                            placeholder="Description"
                                        />
                                        <Text as="body">
                                            Describe the mission of your
                                            project.
                                        </Text>
                                        {errors.description &&
                                        touched.description ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.description}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            as="select"
                                            className={selectField}
                                            name="projectStatus"
                                        >
                                            <option value={0}>
                                                {'Select project status'}
                                            </option>
                                            {projectsStatus &&
                                                projectsStatus.map(
                                                    ({ id, name }) => (
                                                        <option value={id}>
                                                            {name}
                                                        </option>
                                                    )
                                                )}
                                        </Field>
                                        {errors.projectStatus &&
                                        touched.projectStatus ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.projectStatus}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            as="textarea"
                                            className={selectField}
                                            name="usefulLinks"
                                            placeholder="Useful Links (Optional)"
                                        />
                                        {errors.usefulLinks &&
                                        touched.usefulLinks ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.usefulLinks}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            as="select"
                                            className={selectField}
                                            name="location"
                                        >
                                            <option value={0}>
                                                {'Location'}
                                            </option>
                                            {locationOptions &&
                                                locationOptions.map(
                                                    ({ label, value }) => (
                                                        <option value={value}>
                                                            {label}
                                                        </option>
                                                    )
                                                )}
                                        </Field>
                                        {errors.location && touched.location ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.location}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Select
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            name="sector"
                                            onChange={handleSectorSelected}
                                            options={sectorOptions}
                                            placeholder={'Sector'}
                                            styles={styles}
                                            value={sector}
                                        />
                                        {errors.sector && touched.sector ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.sector}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Select
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            name="skills"
                                            onChange={handleSkillsSelected}
                                            options={skillsOptions}
                                            placeholder={'Skills'}
                                            styles={styles}
                                            value={skills}
                                        />
                                        {errors.skills && touched.skills ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.skills}
                                            </Text>
                                        ) : null}
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box mx={6} my={4} textAlign={'right'}>
                                    <Button sx={{ width: '265px' }}>
                                        Create Project
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Box>
    )
}
export default CreateProject
