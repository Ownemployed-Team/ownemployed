import React, { useState } from 'react'
import { css } from 'emotion'
import facepaint from 'facepaint'
import { Text } from 'components/Text'
import sectorData from 'data/sector.json'
import locationsData from 'data/locations.json'
import projectStatusData from 'data/project-status.json'
import skillsData from 'data/skills.json'
import Card from 'components/Card'
import { Box, Flex } from 'rebass'
import { Formik, Form, Field, FormikProps } from 'formik'
import Select from 'react-select'
import theme from 'config/theme'

const MemberFilter = ({ onSubmitSearch }: { onSubmitSearch: any }) => {
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

    const mq = facepaint(
        theme.breakpoints.map(breakpoint => `@media(min-width: ${breakpoint})`)
    )

    const filterFieldsCss = css(
        mq({
            flexDirection: ['column', 'row', 'row'],
        })
    )

    const styles = {
        control: (base, state) => {
            const { className } = (state || {}).selectProps
            const filterFieldCss = mq({
                ...base,
                width: ['100%', 150, 150],
            })

            const projectStatusCss = mq({
                ...base,
                width: ['100%', 160, 160],
            })

            switch (className) {
                case 'sector':
                    return filterFieldCss
                case 'skills':
                    return filterFieldCss
                case 'location':
                    return filterFieldCss
                case 'project-status':
                    return projectStatusCss
                default:
                    return filterFieldCss
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

    const searchButton = css`
        width: 100%;
        padding: 10px;
        height: 34px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
    `

    return (
        <Card
            sx={{
                borderRadius: '0',
                m: 2,
            }}
        >
            <Flex flexWrap="wrap">
                <Box width={[1, 1, 3 / 4]}>
                    <Flex className={filterFieldsCss} flexWrap="wrap" m={1}>
                        <Box>
                            <Text as="h3">Filter</Text>
                        </Box>
                        <Box mx={[0, 2, 2]}>
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
                        <Box mx={[0, 2, 2]}>
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
                        <Box mx={[0, 2, 2]}>
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
                    </Flex>
                </Box>
                <Box width={[1, 1 / 4, 1 / 4]} sx={{ alignContent: 'right' }}>
                    <Box
                        m={1}
                        sx={{
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Formik
                            initialValues={{ search: '' }}
                            onSubmit={onSubmitSearch}
                        >
                            {(props: FormikProps<any>) => (
                                <Form>
                                    <Field
                                        className={searchButton}
                                        name="search"
                                        placeholder="Search"
                                    />
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Flex>
        </Card>
    )
}

export default MemberFilter
