import React, { useState, useContext } from 'react'
import { css } from 'emotion'
import { useAuth0 } from 'lib/react-auth0-spa'
import ConfigContext from 'config/Context'
import { Box, Flex, Image } from 'rebass'
import { Formik, Form, Field } from 'formik'
import skillsData from 'data/skills.json'
import locationsData from 'data/locations.json'
import Button from 'components/Button'
import Card from 'components/Card'
import Link from 'components/Link'
import Text from 'components/Text'
import ImageUploader from 'components/common/ImageUploader'
import Select from 'react-select'
import * as Yup from 'yup'

const CreateUserSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('E-mail is not valid').required('Required'),
    bio: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    location: Yup.string().required(),
    sector: Yup.array(),
    skills: Yup.array(),
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
        console.log(image)
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

    const normalInputField = css`
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

    const selectField = css`
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
        menu: (base, state) => {
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
        <Box mx={7} my={2}>
            <Card
                sx={{
                    mt: 4,
                    padding: 4,
                    borderRadius: 0,
                }}
            >
                <Box mx={4}>
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
                    <Flex m={4}>
                        <Box m={4}>
                            {avatarImage ? (
                                <Image
                                    src={avatarImage}
                                    sx={{
                                        verticalAlign: 'middle',
                                        width: '100px',
                                        height: '100px',
                                    }}
                                />
                            ) : (
                                <Image
                                    sx={{
                                        verticalAlign: 'middle',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        bg: 'primaryHover',
                                    }}
                                />
                            )}
                        </Box>
                        <Box py={2} my={4} width={[3 / 4]}>
                            <ImageUploader
                                onUploadedImage={handleUploadedImage}
                            ></ImageUploader>
                        </Box>
                    </Flex>
                    <Box m={4}>
                        <Formik
                            initialValues={{
                                education: '',
                                email: '',
                                facebook: '',
                                linkedin: '',
                                location: '',
                                firstName: '',
                                lastName: '',
                                sector: [],
                                bio: '',
                                skills: [],
                                twitter: '',
                            }}
                            onSubmit={onSubmitSearch}
                            validationSchema={CreateUserSchema}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Box
                                        sx={{
                                            borderRadius: 0,
                                            borderBottom: '1px solid',
                                            m: 4,
                                        }}
                                    >
                                        <Box sx={{ mx: 6 }}>
                                            <Box>
                                                <Text as="h3">
                                                    Basic information
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Flex width={[3 / 4]}>
                                                    <Box m={2} width={[1]}>
                                                        <Field
                                                            as="input"
                                                            name="userType"
                                                            type="radio"
                                                        ></Field>
                                                        I am a starter/seeker
                                                    </Box>
                                                    <Box m={2} width={[1]}>
                                                        <Field
                                                            as="input"
                                                            name="userType"
                                                            type="radio"
                                                        ></Field>
                                                        I am a mentor
                                                    </Box>
                                                </Flex>
                                                <Flex width={[3 / 4]}>
                                                    <Box m={2} width={[1]}>
                                                        <Field
                                                            as="input"
                                                            name="collaborationType"
                                                            type="radio"
                                                            checked={true}
                                                        ></Field>
                                                        Open for collaborations
                                                    </Box>
                                                    <Box m={2} width={[1]}>
                                                        <Field
                                                            as="input"
                                                            name="collaborationType"
                                                            type="radio"
                                                            checked={false}
                                                        ></Field>
                                                        Not actively open for
                                                        collaborations
                                                    </Box>
                                                </Flex>
                                            </Box>
                                            <Flex>
                                                <Box m={2} width={[1 / 2]}>
                                                    <Field
                                                        className={
                                                            normalInputField
                                                        }
                                                        name="firstName"
                                                        placeholder="First name"
                                                    />
                                                    {errors.firstName &&
                                                    touched.firstName ? (
                                                        <Text
                                                            sx={{
                                                                color: 'red',
                                                            }}
                                                        >
                                                            {errors.firstName}
                                                        </Text>
                                                    ) : null}
                                                </Box>
                                                <Box m={2} width={[1 / 2]}>
                                                    <Field
                                                        className={
                                                            normalInputField
                                                        }
                                                        name="lastName"
                                                        placeholder="Last name"
                                                    />
                                                    {errors.lastName &&
                                                    touched.lastName ? (
                                                        <Text
                                                            sx={{
                                                                color: 'red',
                                                            }}
                                                        >
                                                            {errors.lastName}
                                                        </Text>
                                                    ) : null}
                                                </Box>
                                            </Flex>
                                            <Box m={2}>
                                                <Field
                                                    as="textarea"
                                                    className={areaInputField}
                                                    name="bio"
                                                    placeholder="Bio"
                                                />
                                                <Text as="body">
                                                    Give a brief description
                                                    about yourself and what you
                                                    do. Max 100 characters.
                                                </Text>
                                                {errors.bio && touched.bio ? (
                                                    <Text
                                                        sx={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        {errors.bio}
                                                    </Text>
                                                ) : null}
                                            </Box>
                                            <Box m={2}>
                                                <Field
                                                    as="select"
                                                    className={selectField}
                                                    name="location"
                                                >
                                                    <option value={0}>
                                                        {'Location'}
                                                    </option>
                                                    {locationOptions &&
                                                        locationOptions.map(
                                                            ({
                                                                label,
                                                                value,
                                                            }) => (
                                                                <option
                                                                    value={
                                                                        value
                                                                    }
                                                                >
                                                                    {label}
                                                                </option>
                                                            )
                                                        )}
                                                </Field>
                                                <Text as="body">
                                                    Select the country you are
                                                    based in.
                                                </Text>
                                                {errors.location &&
                                                touched.location ? (
                                                    <Text
                                                        sx={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        {errors.location}
                                                    </Text>
                                                ) : null}
                                            </Box>
                                            <Box m={2}>
                                                <Field
                                                    className={normalInputField}
                                                    name="education"
                                                    placeholder="Education"
                                                ></Field>
                                                <Text as="body">
                                                    Add education
                                                </Text>
                                                {errors.education &&
                                                touched.education ? (
                                                    <Text
                                                        sx={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        {errors.education}
                                                    </Text>
                                                ) : null}
                                            </Box>
                                            <Box m={2}>
                                                <Select
                                                    className={selectClass}
                                                    classNamePrefix="select"
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    name="skills"
                                                    onChange={
                                                        handleSkillsSelected
                                                    }
                                                    options={skillsOptions}
                                                    placeholder={'Skills'}
                                                    styles={styles}
                                                    value={skills}
                                                />
                                                <Text as="body">
                                                    Search for skills
                                                </Text>
                                                {errors.skills &&
                                                touched.skills ? (
                                                    <Text
                                                        sx={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        {errors.skills}
                                                    </Text>
                                                ) : null}
                                            </Box>
                                            <Box my={4}>
                                                <Box m={2}>
                                                    <Text as="h3">
                                                        Social media information
                                                    </Text>
                                                </Box>
                                                <Flex>
                                                    <Box m={2} width={[1 / 2]}>
                                                        <Field
                                                            className={
                                                                normalInputField
                                                            }
                                                            name="email"
                                                            placeholder="Email"
                                                        />
                                                        {errors.email &&
                                                        touched.email ? (
                                                            <Text
                                                                sx={{
                                                                    color:
                                                                        'red',
                                                                }}
                                                            >
                                                                {errors.email}
                                                            </Text>
                                                        ) : null}
                                                    </Box>
                                                    <Box m={2} width={[1 / 2]}>
                                                        <Field
                                                            className={
                                                                normalInputField
                                                            }
                                                            name="facebook"
                                                            placeholder="Facebook"
                                                        />
                                                        {errors.facebook &&
                                                        touched.facebook ? (
                                                            <Text
                                                                sx={{
                                                                    color:
                                                                        'red',
                                                                }}
                                                            >
                                                                {
                                                                    errors.facebook
                                                                }
                                                            </Text>
                                                        ) : null}
                                                    </Box>
                                                </Flex>
                                                <Flex>
                                                    <Box m={2} width={[1 / 2]}>
                                                        <Field
                                                            className={
                                                                normalInputField
                                                            }
                                                            name="linkedin"
                                                            placeholder="Linkedin"
                                                        />
                                                        {errors.linkedin &&
                                                        touched.linkedin ? (
                                                            <Text
                                                                sx={{
                                                                    color:
                                                                        'red',
                                                                }}
                                                            >
                                                                {
                                                                    errors.linkedin
                                                                }
                                                            </Text>
                                                        ) : null}
                                                    </Box>
                                                    <Box m={2} width={[1 / 2]}>
                                                        <Field
                                                            className={
                                                                normalInputField
                                                            }
                                                            name="twitter"
                                                            placeholder="Twitter"
                                                        />
                                                        {errors.twitter &&
                                                        touched.twitter ? (
                                                            <Text
                                                                sx={{
                                                                    color:
                                                                        'red',
                                                                }}
                                                            >
                                                                {errors.twitter}
                                                            </Text>
                                                        ) : null}
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box mx={6} my={4} textAlign={'right'}>
                                            <Button sx={{ width: '265px' }}>
                                                Update Profile
                                            </Button>
                                        </Box>
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
