import React, { PureComponent } from 'react'
import { Image } from 'rebass'
import Layout from '../../components/Layout'
import MembershipForm from './membershipForm'
import './index.css'
import { withSignup, withUserStore, UserState } from 'data/user/context'
import { AuthStates } from 'data/user/cognitoAuth'

interface LoginPageProps {
    signup: (email: string, password: string) => any // inherited from HOC
    userStore: UserState // inherited from HOC
}
class LoginPage extends PureComponent<LoginPageProps> {
    state = {}
    componentDidMount() {
        console.log('User  store: ', this.props.userStore)
    }

    handleSignup = (event: any) => {
        if (event.email && event.password) {
            this.props.signup(event.email, event.password)
        }
    }

    render() {
        return (
            <Layout boxed={false}>
                <div className="LoginPage-container">
                    {this.props.userStore &&
                        this.props.userStore.journeyPoint ===
                            AuthStates.LOGGED_IN && <p>Hello, new user</p>}
                    <MembershipForm onSubmit={this.handleSignup} />
                    <Image src="/imgs/illustrations/home.svg" />
                </div>
            </Layout>
        )
    }
}

export default withUserStore(withSignup(LoginPage))
