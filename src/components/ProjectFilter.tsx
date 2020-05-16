import React from 'react'
import { Text } from 'components/Text'
import Card from 'components/Card'
import { Box, Flex } from 'rebass'
import { Input, Label, Select } from '@rebass/forms'
import { colors } from '../utils/colors'

// const { Title, Text, Paragraph } = Typography

const ProjectFilter = ({
    baseUrl,
    title,
    options,
    selected,
}: {
    baseUrl: string
    title: string
    selected: any[]
    options: any[]
}) => {
    const countries = [
        { key: '0', value: 'USA' },
        { key: '1', value: 'Kina' },
        { key: '2', value: 'Sverige' },
        { key: '3', value: 'Danmark' },
    ]
    return (
        <Card
            sx={{
                borderRadius: '0',
                m: 2,
            }}
        >
            <Flex m={3}>
                <Box width={3 / 4}>
                    <Flex m={3}>
                        <Text as="h3">Filter</Text>
                        <Box mx={2}>
                            <Select
                                id="country"
                                name="country"
                                defaultValue="United States"
                            >
                                {countries.map(({ key, value }) => (
                                    <option key={key}>{value}</option>
                                ))}
                            </Select>
                        </Box>
                        <Box mx={2}>
                            <Select
                                id="country"
                                name="country"
                                defaultValue="United States"
                            >
                                {countries.map(({ key, value }) => (
                                    <option key={key}>{value}</option>
                                ))}
                            </Select>
                        </Box>
                        <Box mx={2}>
                            <Select
                                id="country"
                                name="country"
                                defaultValue="United States"
                            >
                                {countries.map(({ key, value }) => (
                                    <option key={key}>{value}</option>
                                ))}
                            </Select>
                        </Box>
                        <Box mx={2}>
                            <Select
                                id="country"
                                name="country"
                                defaultValue="United States"
                            >
                                {countries.map(({ key, value }) => (
                                    <option key={key}>{value}</option>
                                ))}
                            </Select>
                        </Box>
                    </Flex>
                </Box>
                <Box width={1 / 4}>
                    <Flex m={3}>
                        <Input
                            id="search"
                            name="name"
                            placeholder="Sök"
                        ></Input>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}

export default ProjectFilter
