import React from 'react'
import { Card } from 'antd'
import avatar from '../static/avatars/user/deborah.png'

const { Meta } = Card
const UserCard = ({ user, style }) => (
  <Card
    cover={
      <div style={{ height: '110px', margin: 'auto', width: '110px' }}>
        <img alt='member' src={avatar}/>
      </div>
    }
    style={{ height: '300px', width: '300px', margin: '16px', padding: '24px' }}
    >
    <Meta
      title={user.name}
      description={user.summary}
    />
  </Card>
)


export default UserCard