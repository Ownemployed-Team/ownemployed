import React from 'react'
import {Link} from "react-router-dom"
import { Card, Tag, Typography } from 'antd'
import { colors } from '../utils/colors'

const { Title, Text, Paragraph } = Typography;

const Filter = ({ baseUrl, title, options, selected }) => (
  <div style={{ textAlign: 'center', margin: '8px' }}>
    <Paragraph strong>{title}</Paragraph>
    {Object.values(options).map((item, i) => {
      const active = selected.includes(item)
      const color = active
        ? colors.primaryLight
        : null
      const next = [...selected]
      if (active) next.splice(next.indexOf(item), 1)
      else next.push(item)

        return (
        <Link to={`${baseUrl}?selected=${encodeURIComponent(JSON.stringify(next))}`}>
          <Tag key={i} color={color} style={{ margin: '4px'}}>{item}</Tag>
        </Link>
        )
    })}
</div>
)

export default Filter