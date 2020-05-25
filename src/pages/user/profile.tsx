import React, { useState, useContext } from 'react'
import { useAuth0 } from 'lib/react-auth0-spa'
import ConfigContext from 'config/Context'

import Text from 'components/Text'
import Link from 'components/Link'
import Card from 'components/Card'

const Profile = ({ match }) => {
    const { loading, user } = useAuth0()
    if (loading || !user) {
        return <Text>Loading...</Text>
    }

    return (
        <>
            <Card
                sx={{
                    mt: 4,
                    padding: 4,
                    borderRadius: 'default',
                }}
            >
                <Text as="h3">My Profile</Text>
                <Text as="p">
                    Help the Ownemployed community get to know you better.
                </Text>
                <hr />

                <Text as="h3">{user.name}</Text>
                <Text as="body">{user.email}</Text>
                <Text as="body">{user.nickname}</Text>
                <Link to={`${match.url}/settings`}>Settings</Link>
                <Link to={`${match.url}/my-projects`}>My Projects</Link>
            </Card>
        </>
    )
}

export default Profile

/*
const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("http://localhost:3001/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;
*/
