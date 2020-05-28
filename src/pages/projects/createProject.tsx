import React, { useState } from 'react'
// import { jsx } from '@emotion/core'
import { css } from 'emotion'
import { Box, Flex } from 'rebass'
import Card from 'components/Card'
import Button from 'components/Button'
import ProjectCard from 'components/ProjectCard'
import Text from 'components/Text'
import sectorData from 'data/sector.json'
import locationsData from 'data/locations.json'
import projectsStatus from 'data/project-status.json'
import skillsData from 'data/skills.json'
import ReactPaginate from 'react-paginate'
import { useLocation } from 'react-router'
import ProjectFilter from 'components/ProjectFilter'
import { Formik, Form, Field, FormikProps } from 'formik'
import { projects as content } from 'data/content.json'
import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'
import ImageUploader from 'components/common/ImageUploader'
import Select from 'react-select'

const CreateProject = () => {
    const [sector, setSector] = useState([])
    const [skills, setSkills] = useState([])
    const [location, setLocation] = useState([])

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

    const handleLocationSelected = values => {
        setLocation(values)
    }

    const onSubmitSearch = (values, actions) => {
        setTimeout(() => {
            //TODO : call backend to find project with query function getProjects
            // const { search } = values
            // getProjects({
            // 	variables: {
            // 		name: search

            // 	}
            // })
            alert(JSON.stringify(values, null, 2))
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
        <Box>
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
                    initialValues={{ search: '' }}
                    onSubmit={onSubmitSearch}
                >
                    {(props: FormikProps<any>) => (
                        <Form>
                            <Box
                                sx={{
                                    borderRadius: 0,
                                    borderBottom: '1px solid',
                                }}
                            >
                                <Box sx={{ mx: 6 }}>
                                    <Box my={4}>
                                        <Field
                                            className={normalInputField}
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={normalInputField}
                                            name="short-description"
                                            placeholder="Short Description"
                                        />
                                        <Text as="body">
                                            Give a brief description about your
                                            project.{' '}
                                        </Text>
                                    </Box>
                                    <Box my={4}>
                                        <ImageUploader />
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
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            as="select"
                                            className={normalInputField}
                                            name="description"
                                            placeholder="Project Status"
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
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            as="textarea"
                                            className={normalInputField}
                                            name="useful-links"
                                            placeholder="Useful Links (Optional)"
                                        />
                                    </Box>
                                    <Box my={4}>
                                        <Select
                                            className="location"
                                            classNamePrefix="select"
                                            onChange={handleLocationSelected}
                                            options={locationOptions}
                                            placeholder={'Location'}
                                            styles={styles}
                                            value={location}
                                        />
                                    </Box>
                                    <Box my={4}>
                                        <Select
                                            className="sector"
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            onChange={handleSectorSelected}
                                            options={sectorOptions}
                                            placeholder={'Sector'}
                                            styles={styles}
                                            value={sector}
                                        />
                                    </Box>
                                    <Box my={4}>
                                        <Select
                                            className="skills"
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            onChange={handleSkillsSelected}
                                            options={skillsOptions}
                                            placeholder={'Skills'}
                                            styles={styles}
                                            value={skills}
                                        />
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
