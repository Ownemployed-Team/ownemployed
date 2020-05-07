import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card
const UserCard = ({ user, style = {} }) => {
    let avatar = require('../static/avatars/user/default.png')
    try {
        avatar = require(`../static/avatars/user/${user.id}.png`)
    } catch (e) {}
    return (
        <Link to={`/members/${user.id}`}>
            <Card
                bodyStyle={{ padding: '16px 0' }}
                cover={
                    <div style={{ height: '110px', width: '100%' }}>
                        <img
                            alt="member"
                            src={avatar}
                            style={{ height: '110px' }}
                        />
                    </div>
                }
                style={{
                    height: '300px',
                    width: '300px',
                    margin: '8px',
                    padding: '24px',
                }}
            >
                <Meta title={user.name} description={user.summary} />
                <div style={{ fontSize: '12px', paddingTop: '12px' }}>
                    {user.location ? `Location: ${user.location}` : ''}
                </div>
            </Card>
        </Link>
    )
}

export default UserCard
