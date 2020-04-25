import React from 'react'
import { Card } from 'antd'
import avatar from '../static/avatars/user/deborah.png'

const { Meta } = Card
let defaultStyle={ textAlign: 'center' }
const UserCard = ({ user, style }) => (
  <Card
    cover={
      <div style={{ height: '110px', margin: 'auto', width: '110px' }}>
        <img alt='member' src={avatar}/>
      </div>
    }
    style={{...defaultStyle,...style}}
    >
    <Meta
      title={user.name}
      description={user.summary}
    />
  </Card>
)


export default UserCard