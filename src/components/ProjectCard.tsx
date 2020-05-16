import React from 'react'
import Card from 'components/Card'
import Text from 'components/Text'
import { Image, Box } from 'rebass'
// Avatar as RebassAvatar,
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'

// const { Meta } = Card

const ProjectCard = ({ project }) => {
    const { contributors, description, id, name, status } = project
    let avatar = require('../static/avatars/business/default.png')
    try {
        avatar = require(`../static/avatars/business/${id}.png`)
    } catch (e) {}
    return (
        <Link to={`/projects/${id}`}>
            <Card
                sx={{
                    borderRadius: '0',
                    bg: '#F3F3F3',
                    mx: '0',
                    padding: '0',
                }}
                // style={{ margin: '8px' }}
            >
                <Image src={avatar} m={'auto'} />
                <Box
                    bg={'white'}
                    sx={{
                        maxWidth: 512,
                        mx: 'auto',
                        p: 4,
                    }}
                >
                    <Text
                        as="h1"
                        sx={{
                            fontSize: [16, 20, 20],
                        }}
                    >
                        {name}
                    </Text>
                    <Text as="body">{description}</Text>
                </Box>
                {/* <Meta
                    // avatar={<Avatar src={avatar} />}
                    title={project.name}
                    description={project.tagline}
                /> */}
                <div
                    style={{
                        fontSize: '12px',
                        color: colors.primaryLight,
                        padding: '8px 24px',
                        position: 'absolute',
                        bottom: '10px',
                        left: '0px',
                    }}
                >
                    {status ? `Status: ${status}` : ''}
                    <br />
                    {contributors
                        ? `Contributors: ${contributors.toString()}`
                        : ''}
                </div>
            </Card>
        </Link>
    )
}

export default ProjectCard
