import React, { PureComponent } from 'react'
import { Label, Input } from '@rebass/forms'
import { Link } from 'rebass'
import Text from '../../components/Text'
import Button from '../../components/Button'
import './index.css'

const buttonStyles = {
    width: '100%',
}
const inputStyles = {
    height: '3.2rem',
    boxShadow: '1px 1px 3px lightgray',
    border: '1px solid lightgray',
    paddingTop: '1.8rem',
    borderRadius: '6px',
    backgroundColor: 'white',
}
const labelStyles = {
    position: 'relative',
    top: '1.5rem',
    left: '0.5rem',
    zIndex: 5,
    color: 'primary',
    fontSize: '0.9rem',
}
const forgotStyles = {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'underline',
    color: 'secondary',
    cursor: 'pointer',
    fontSize: '0.9rem',
}

interface MembershipFormState {
    email?: string
    password?: string
}
export default class MembershipForm extends PureComponent<any> {
    state: MembershipFormState = {}

    updateStateField = (fieldKey: string, value: any) => {
        this.setState({
            [fieldKey]: value,
        })
    }
    handleSignup = (event: any) => {
        event.preventDefault()
        console.log('Registering your account')
    }

    render() {
        const path: string = this.props.location && this.props.location.pathname

        return (
            <div className="MembershipForm-container">
                <Text as="h2">Log In or Register</Text>
                <form onSubmit={this.handleSignup}>
                    <Label htmlFor="email" sx={labelStyles}>
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@ownemployed.com"
                        sx={inputStyles}
                        onChange={evt =>
                            this.updateStateField('email', evt.target.value)
                        }
                        required
                    />
                    <Label htmlFor="password" sx={labelStyles}>
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Super~Secr8"
                        sx={inputStyles}
                        onChange={evt =>
                            this.updateStateField('password', evt.target.value)
                        }
                        required
                    />
                    <br />
                    <br />
                    <Link to="/forgot" variant="secondary" sx={forgotStyles}>
                        Forgotten Password?
                    </Link>
                    <br />
                    <Button type="submit" sx={buttonStyles}>
                        Sign Up
                    </Button>
                </form>
            </div>
        )
    }
}
