import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { css } from 'emotion'
import ADD_PROJECT from 'graphql/add-project'
import { useAuth0 } from 'lib/react-auth0-spa'
import * as Yup from 'yup'

import { Formik, Form, Field } from 'formik'
import { Box } from 'rebass'
import Select from 'react-select'
import Card from 'components/Card'
import Button from 'components/Button'
import Text from 'components/Text'
import ImageUploader from 'components/common/ImageUploader'

import sectorData from 'data/sector.json'
import locationsData from 'data/locations.json'
import projectsStatus from 'data/project-status.json'
import skillsData from 'data/skills.json'

const CreateProjectSchema = Yup.object().shape({
    links: Yup.string(),
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
    location: Yup.array().required(),
    sectors: Yup.array(),
    skillsRequired: Yup.array(),
})

const CreateProject = () => {
    const useAuth = useAuth0()
    console.log(useAuth)
    const [projectImage, setProjectImage] = useState('')
    const [addProject, { data }] = useMutation(ADD_PROJECT)

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

    const handleSelected = (name, setFieldValue) => values => {
        setFieldValue(name, values)
    }

    const handleUploadedImage = imageUrl => {
        setProjectImage(imageUrl)
    }

    const formatDate = date => {
        const d = new Date(date)
        let month = `${d.getMonth() + 1}`
        let day = `${d.getDate()}`
        const year = d.getFullYear()

        if (month.length < 2) month = `0${month}`
        if (day.length < 2) day = `0${day}`

        return [year, month, day].join('-')
    }

    const onCreateProject = (values, actions) => {
        setTimeout(async () => {
            const locationssValues = values.location.map(({ label }) => label)
            const skillsRequiredValues = values.skillsRequired.map(
                ({ label }) => label
            )
            const sectorValues = values.sectors.map(({ label }) => label)
            // const user = await getUser()
            // console.log(user)
            const mutatedValues = {
                ...values,
                creationDate: formatDate(Date.now()),
                //contributors:
                // ownerId: user.id
                location: locationssValues,
                picture: projectImage,
                sectors: sectorValues,
                skillsRequired: skillsRequiredValues,
            }

            console.log(JSON.stringify(mutatedValues))

            // addProject({ variables: mutatedValues })

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
                case 'sectors':
                    return { ...base, width: '100%' }
                case 'skillsRequired':
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
        <Box mx={[4, 4, 7]} my={4}>
            <Card sx={{ borderRadius: 0, borderBottom: '1px solid' }}>
                <Box mx={[4, 4, 6]} my={4}>
                    <Text as="h3">Create Project</Text>
                    <Text as="body">
                        Ready to get started? Tell us about your idea.
                    </Text>
                </Box>
            </Card>
            <Card sx={{ borderRadius: 0 }}>
                <Formik
                    initialValues={{
                        description: '',
                        imageUrl: '',
                        links: '',
                        location: '',
                        name: '',
                        projectStatus: '',
                        sectors: [],
                        shortDescription: '',
                        skillsRequired: [],
                    }}
                    onSubmit={onCreateProject}
                    validationSchema={CreateProjectSchema}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <Box
                                sx={{
                                    borderRadius: 0,
                                    borderBottom: '1px solid',
                                }}
                            >
                                <Box sx={{ mx: [2, 4, 6] }}>
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
                                        <ImageUploader
                                            onUploadedImage={
                                                handleUploadedImage
                                            }
                                            isImageVisibleInBox
                                        />
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
                                            name="links"
                                            placeholder="Useful Links (Optional)"
                                        />
                                        {errors.links && touched.links ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.links}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            component={Select}
                                            isMulti={true}
                                            name="location"
                                            onChange={handleSelected(
                                                'location',
                                                setFieldValue
                                            )}
                                            options={locationOptions}
                                            placeholder={'Locations'}
                                            styles={styles}
                                        ></Field>
                                        {/* <Select
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            name="location"
                                            onChange={handleLocationSelected}
                                            options={locationOptions}
                                            placeholder={'Locations'}
                                            styles={styles}
                                            value={locations}
                                        /> */}
                                        {errors.location && touched.location ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.location}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            component={Select}
                                            isMulti
                                            name="sectors"
                                            onChange={handleSelected(
                                                'sectors',
                                                setFieldValue
                                            )}
                                            options={sectorOptions}
                                            placeholder={'Sector'}
                                            styles={styles}
                                        />
                                        {errors.sectors && touched.sectors ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.sectors}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            component={Select}
                                            isMulti
                                            name="skillsRequired"
                                            onChange={handleSelected(
                                                'skillsRequired',
                                                setFieldValue
                                            )}
                                            options={skillsOptions}
                                            placeholder={'Skills'}
                                            styles={styles}
                                        />
                                        {errors.skillsRequired &&
                                        touched.skillsRequired ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.skillsRequired}
                                            </Text>
                                        ) : null}
                                    </Box>
                                </Box>
                            </Box>
                            <Box mx={[2, 4, 6]}>
                                <Box my={4} textAlign={'right'}>
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
