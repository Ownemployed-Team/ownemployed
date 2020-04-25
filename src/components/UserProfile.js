import * as React from 'react'
import { Card} from 'antd'
import PageLayout from './PageLayout'
import {useParams} from "react-router";
const { Meta } = Card;

export const profiles = {
    deborah: {
        name: "Deborah",
        summary: "Marketing Manager",
    },
}

const UserProfile = () => {

  const { userProfileId } = useParams()
    let profile = profiles[userProfileId];

    return (<PageLayout>
      <div style={{ textAlign: 'center'}}>
          <Card
              // hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={`/imgs/users/${userProfileId}.png`} />}>
              <Meta title={profile.name} description={profile.summary} />
          </Card>,
      </div>
  </PageLayout>
)}

export default UserProfile