import * as React from 'react'
import { Typography, Row, Col, Card, Divider } from 'antd'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

const { Paragraph, Title } = Typography

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

function passwordComparison(passwordValue: string, currentValue: string) {
    if (!currentValue || passwordValue === currentValue) {
        return Promise.resolve()
    }
    return Promise.reject('The two passwords that you entered do not match.')
}

const SignUpForm = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Row gutter={16}>
                    <Col span={10} offset={7} flex="auto">
                        <Title>Sign up for an account</Title>
                        <Paragraph>
                            You will be able to create/join mentor projects
                            after.
                        </Paragraph>
                        <Card>
                            <Form
                                {...layout}
                                name="registrationForm"
                                initialValues={{ remember: true }}
                            >
                                <Form.Item
                                    label="E-mail"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            type: 'email',
                                            message:
                                                'Please insert a correct e-mail address.',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            min: 8,
                                            message:
                                                'Please input a valid password. (8 characters min.)',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm Password"
                                    name="confirm"
                                    dependencies={['password']}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                return passwordComparison(
                                                    getFieldValue('password'),
                                                    value
                                                )
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form>
                            <Divider>or</Divider>
                            <Link to="/">Log in</Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SignUpForm
