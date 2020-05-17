import React, { useState } from 'react'
import { css } from 'emotion'
import { Text } from 'components/Text'
import sectorData from 'data/sector.json'
import locationsData from 'data/locations.json'
import projectStatusData from 'data/project-status.json'
import skillsData from 'data/skills.json'
import Card from 'components/Card'
import { Box, Flex } from 'rebass'
import { Formik, Form, Field, FormikProps } from 'formik'
import Select from 'react-select'

const ProjectFilter = ({ onGet }: { onGet: Function }) => {
    const [sector, setSector] = useState([])
    const [skills, setSkills] = useState([])
    const [location, setLocation] = useState([])
    const [projectStatus, setProjectStatus] = useState([])

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
    const projectStatusOptions = projectStatusData.map(({ id, name }) => ({
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

    const handleProjectStatusSelected = values => {
        setProjectStatus(values)
    }

    const handleSearchSubmit = (values, actions) => {
        setTimeout(() => {
            //TODO : call backend to find project with query function getProjects
            const { search } = values
            // getProjects({
            // 	variables: {
            // 		name: search
            // 	}
            // })
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }

    const styles = {
        control: (base, state) => {
            const { className } = (state || {}).selectProps
            switch (className) {
                case 'sector':
                    return { ...base, width: 150 }
                case 'skills':
                    return { ...base, width: 150 }
                case 'location':
                    return { ...base, width: 150 }
                case 'project-status':
                    return { ...base, width: 160 }
                default:
                    return { ...base, width: 150 }
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
        <Card
            sx={{
                borderRadius: '0',
                m: 2,
            }}
        >
            <Flex>
                <Box width={3 / 4}>
                    <Flex m={1}>
                        <Text as="h3">Filter</Text>
                        <Box mx={2}>
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
                        <Box mx={2}>
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
                        <Box mx={2}>
                            <Select
                                className="location"
                                classNamePrefix="select"
                                closeMenuOnSelect={false}
                                isMulti
                                onChange={handleLocationSelected}
                                options={locationOptions}
                                placeholder={'Location'}
                                styles={styles}
                                value={location}
                            />
                        </Box>
                        <Box mx={2}>
                            <Select
                                className="project-status"
                                classNamePrefix="select"
                                closeMenuOnSelect={false}
                                isMulti
                                onChange={handleProjectStatusSelected}
                                options={projectStatusOptions}
                                placeholder={'Project status'}
                                styles={styles}
                                value={projectStatus}
                            />
                        </Box>
                    </Flex>
                </Box>
                <Box
                    width={1 / 4}
                    sx={{
                        alignContent: 'right',
                    }}
                >
                    <Flex
                        m={1}
                        sx={{
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Formik
                            initialValues={{ search: '' }}
                            onSubmit={handleSearchSubmit}
                        >
                            {(props: FormikProps<any>) => (
                                <Form>
                                    <Field
                                        className={css`
                                            width: 100%;
                                            padding: 10px;
                                            height: 34px;
                                            align-items: center;
                                            background-color: hsl(0, 0%, 100%);
                                            border-color: hsl(0, 0%, 80%);
                                            border-radius: 4px;
                                            border-style: solid;
                                            border-width: 1px;
                                        `}
                                        name="search"
                                        placeholder="Search"
                                    />
                                </Form>
                            )}
                        </Formik>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}

export default ProjectFilter
