import React from 'react'
import { Typography, Card } from 'antd'
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'

const { Paragraph } = Typography

const LandingPageCard = ({ text, to }) => (
    <Link to={to}>
        <div
            style={{
                height: '300px',
                borderRadius: '10px',
                boxShadow: '4px 2px 10px lightgray',
                margin: '16px',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paragraph
                style={{
                    fontSize: '18px',
                    color: colors.primaryLight,
                    fontWeight: 600,
                    width: '240px',
                }}
            >
                {text}
            </Paragraph>
        </div>
    </Link>
)

export default LandingPageCard
