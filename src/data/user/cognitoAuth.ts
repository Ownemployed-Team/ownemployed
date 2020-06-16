import { Auth } from '@aws-amplify/auth'

export interface IdentityCredentials {
    accessKeyId: string
    authenticated: boolean
    expiration?: Date
    identityId: string
    secretAccessKey: string
    sessionToken: string
}
export interface CognitoRegisteredUser {
    attributes: CognitoUserAttributes
    username: string
    authenticationFlowType: string
    client: any
    signInUserSession: any
    preferredMFA: string
    keyPrefix?: string
    userDataKey?: string
}
export interface CognitoUserAttributes {
    [prop: string]: any
    email?: string
    email_verified?: boolean
    sub: string
}
export enum AuthStates {
    SIGNING_IN = 'signIn',
    LOGGED_IN = 'signedIn',
    GUEST = 'signUp',
    SETUP_TOTP = 'TOTPSetup',
    PENDING_VERIFICATION = 'verifyContact',
    CONFIRM_TOTP = 'confirmSignIn',
    REQUIRE_PW_CHANGE = 'requireNewPassword',
}

const authService = {
    async getCredentials(): Promise<IdentityCredentials> {
        const credentials = await Auth.currentCredentials()
        return credentials
    },

    async getUser(): Promise<CognitoRegisteredUser> {
        return Auth.currentAuthenticatedUser()
    },

    async register(
        email: string,
        password: string,
        username?: string
    ): Promise<any> {
        const confirmedUser = await Auth.signUp({
            username: username || email,
            password,
            attributes: { email },
        })
        console.log('Was the user confirmed? ', confirmedUser)
        return confirmedUser
    },

    async login(email: string, password: string): Promise<any> {
        const confirmedUser = await Auth.signIn(email, password)
        return confirmedUser
    },

    async verifySignupToken(username: string, token: string) {
        const confirmation = await Auth.confirmSignUp(username, token)
        console.log('Confirmation: ', confirmation)
        return confirmation
    },

    async logout() {
        try {
            const signOutConfirmation = await Auth.signOut()
            console.log('Successfully signed out: ', signOutConfirmation)
        } catch (err) {
            console.warn('Unable to sign out due to error: ', err)
        }
    },

    async getId(): Promise<string> {
        return this.getUser()
            .then(user => {
                return user.attributes && user.attributes.sub
            })
            .catch(err => {
                const message =
                    err && err.message ? err.message : 'Not logged in'
                return message
            })
    },
}
export default authService
