import React, { useState, useContext } from 'react'
import { css } from 'emotion'
import { useAuth0 } from 'lib/react-auth0-spa'
import ConfigContext from 'config/Context'
import { Box } from 'rebass'
import { Formik, Form } from 'formik'
import skillsData from 'data/skills.json'
import locationsData from 'data/locations.json'
import Card from 'components/Card'
import Link from 'components/Link'
import Text from 'components/Text'
import * as Yup from 'yup'
import AvatarImage from 'components/userProfile/AvatarImage'
import BasicInfo from 'components/userProfile/BasicInfo'
import DetailedInfo from 'components/userProfile/DetailedInfo'
import SubmitButton from 'components/userProfile/SubmitButton'

const CreateUserSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    bio: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    headline: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    location: Yup.string().required(),
    sector: Yup.array(),
    skills: Yup.array(),
    website: Yup.string().url(),
})

const Profile = ({ match }) => {
    const [profileImage, setProfileImage] = useState('')
    const [avatarImage, setAvatarImage] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [apiMessage, setApiMessage] = useState('')
    const [skills, setSkills] = useState([])
    const { getTokenSilently } = useAuth0()

    const skillsOptions = skillsData.map(({ id, name }) => ({
        value: id,
        label: name,
    }))
    const locationOptions = locationsData.map(({ id, name }) => ({
        value: id,
        label: name,
    }))

    const { apiURL } = useContext(ConfigContext)

    const callApi = async () => {
        try {
            const token = await getTokenSilently()

            const response = await fetch(`${apiURL}/graphql`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            const responseData = await response.json()

            setShowResult(true)
            setApiMessage(responseData)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSkillsSelected = values => {
        setSkills(values)
    }

    const handleUploadedImage = image => {
        //profile image should be saved to database while avatar image is just for viewing.
        setProfileImage(image)
        const avatarImage = image.replace(
            '/upload',
            '/upload/w_400,h_400,c_crop,g_face,r_max/w_200'
        )

        setAvatarImage(avatarImage)
    }

    const onSubmitSearch = (values, actions) => {
        setTimeout(() => {
            const skillsValues = skills.map(({ value }) => value)
            const mutatedValues = {
                ...values,
                skills: skillsValues,
            }

            //TODO : Add createProject request to BE.
            // const { search } = values
            // createProjects({
            // 	variables: {
            // 		...mutatedValues
            // 	}
            // })

            alert(JSON.stringify(mutatedValues, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }

    const defaultNormalInputFieldStyle = css`
        width: 100%;
        padding: 10px;
        height: 64px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;

        ::placeholder {
            color: #6f63ad;
            vertical-align: top;
        }
    `

    const defaultSelectFieldStyle = css`
        color: #6f63ad;
        width: 100%;
        padding: 10px;
        height: 64px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;

        ::placeholder {
            color: #6f63ad;
            vertical-align: top;
        }
    `

    const areaInputField = css`
        width: 100%;
        padding: 10px;
        height: 100px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;

        ::placeholder {
            color: #6f63ad;
            vertical-align: top;
        }
    `

    const selectClass = css`
        .select__control {
            height: 64px;
        }

        .select__placeholder {
            color: #6f63ad;
        }
    `

    const styles = {
        control: (base, state) => {
            const { className } = (state || {}).selectProps
            switch (className) {
                case 'sector':
                    return { ...base, width: '100%' }
                case 'skills':
                    return { ...base, width: '100%' }
                case 'location':
                    return { ...base, width: '100%' }
                default:
                    return { ...base, width: '100%' }
            }
        },
        menu: base => {
            return { ...base, width: 300 }
        },
        multiValue: (base, state) => {
            return state.data.isFixed
                ? { ...base, backgroundColor: 'gray' }
                : base
        },
        multiValueLabel: (base, state) => {
            return state.data.isFixed
                ? {
                      ...base,
                      fontWeight: 'bold',
                      color: 'white',
                      paddingRight: 6,
                  }
                : base
        },
        multiValueRemove: (base, state) => {
            return state.data.isFixed ? { ...base, display: 'none' } : base
        },
    }

    return (
        <Box mx={[0, 0, 7]} my={2}>
            <Card
                sx={{
                    mt: 4,
                    padding: 4,
                    borderRadius: 0,
                }}
            >
                <Box mx={[0, 0, 6]}>
                    <Box>
                        <Text as="h3">My Profile</Text>
                    </Box>
                    <Box>
                        <Text as="body">
                            Help the Ownemployed community get to know you
                            better.
                        </Text>
                    </Box>
                    <hr />
                    <Box>
                        <Formik
                            initialValues={{
                                education: '',
                                emailPrivacy: '',
                                facebook: '',
                                headline: '',
                                linkedin: '',
                                location: '',
                                firstName: '',
                                lastName: '',
                                sector: [],
                                bio: '',
                                skills: [],
                                twitter: '',
                                userType: 'true',
                                website: '',
                            }}
                            onSubmit={onSubmitSearch}
                            validationSchema={CreateUserSchema}
                        >
                            {({
                                errors,
                                setFieldValue,
                                submitForm,
                                touched,
                                values,
                            }) => (
                                <Form>
                                    <Box>
                                        <AvatarImage
                                            avatarImage={avatarImage}
                                            errors={errors}
                                            onUploadedImage={
                                                handleUploadedImage
                                            }
                                            normalInputField={
                                                defaultNormalInputFieldStyle
                                            }
                                            touched={touched}
                                        ></AvatarImage>
                                        <BasicInfo
                                            areaInputField={areaInputField}
                                            errors={errors}
                                            locationOptions={locationOptions}
                                            selectField={
                                                defaultSelectFieldStyle
                                            }
                                            touched={touched}
                                        ></BasicInfo>
                                        <DetailedInfo
                                            defaultNormalInputFieldStyle={
                                                defaultNormalInputFieldStyle
                                            }
                                            errors={errors}
                                            onSkillsSelected={
                                                handleSkillsSelected
                                            }
                                            selectClass={selectClass}
                                            onSetFieldValue={setFieldValue}
                                            skills={skills}
                                            skillsOptions={skillsOptions}
                                            styles={styles}
                                            touched={touched}
                                            values={values}
                                        ></DetailedInfo>
                                        <SubmitButton
                                            onSubmitForm={submitForm}
                                        ></SubmitButton>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                    <Link to={`${match.url}/settings`}>Settings</Link>
                    <button onClick={callApi}>Ping API</button>
                    {showResult && (
                        <code>{JSON.stringify(apiMessage, null, 2)}</code>
                    )}
                </Box>
            </Card>
        </Box>
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
