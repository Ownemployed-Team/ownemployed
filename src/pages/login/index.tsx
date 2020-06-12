import React, { PureComponent } from 'react'
import { Image } from 'rebass'
import Layout from '../../components/Layout'
import RegForm from './membershipForm'
import './index.css'

interface LoginPageProps {}
export default class LoginPage extends PureComponent<LoginPageProps> {
    state = {}

    render() {
        return (
            <Layout boxed={false}>
                <div className="LoginPage-container">
                    <RegForm />
                    <Image src="/imgs/illustrations/home.svg" />
                </div>
            </Layout>
        )
    }
}
