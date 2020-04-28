import React from 'react'
import {Card} from 'antd'
import {Link} from "react-router-dom";

const {Meta} = Card
const UserCard = ({user, style}) => {
  let avatar = require('../static/avatars/user/default.png')
  try {
      avatar = require(`../static/avatars/user/${user.id}.png`)
  } catch (e) {}
  let summary = user.summary || ""
  summary = summary.length < 40 ? summary : (summary.substring(0,40) + "...")
  return (
    <Link to={`/members/${user.id}`}>
      <Card
        cover={
          <div style={{height: '110px', width: '100%'}}>
            <img alt='member' src={avatar} style={{ height: '110px'}}/>
          </div>
        }
        size="small"
        style={{...{},...style}}
      >
        <Meta
          title={user.name}
          description={summary}
        />
        <div style={{ fontSize: '12px', paddingTop: '12px'}}>
          {user.location
            ? `${user.location}`
            : ''
          }
        </div>
      </Card>
    </Link>
  )
}


export default UserCard