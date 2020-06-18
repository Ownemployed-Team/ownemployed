import React from 'react'
import { Dispatch, Action, ProviderProps } from '../types'
import AuthService, { AuthStates } from './cognitoAuth'

interface UserState {
    active: any
    journeyPoint: AuthStates
}
const defaultState: UserState = {
    active: null,
    journeyPoint: AuthStates.GUEST,
}

const UserStateContext = React.createContext<UserState | undefined>(undefined)
const UserDispatchContext = React.createContext<Dispatch | undefined>(undefined)

function userReducer(
    state: UserState = defaultState,
    action: Action
): UserState {
    switch (action.type) {
        case userActions.SET_ACTIVE:
            return {
                ...state,
                active: action.payload,
            }
        case userActions.SET_AUTH_STATE:
            return {
                ...state,
                journeyPoint: action.payload,
            }
        default:
            console.warn('Action not supported')
            return state
    }
}

export const userActions = {
    SET_ACTIVE: 'SET_ACTIVE',
    SET_AUTH_STATE: 'SET_AUTH_STATE',
}

export function UserProvider(props: ProviderProps): React.ReactNode {
    const [state, dispatch] = React.useReducer(userReducer, defaultState)

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {props.children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export function useAuthState(): UserState {
    const stateContext = React.useContext(UserStateContext)
    if (stateContext === undefined) {
        console.error('User state can only be used within a UserProvider tree')
        return defaultState
    } else {
        return stateContext
    }
}
export function useAuthDispatch(): Dispatch {
    const dispatchContext = React.useContext(UserDispatchContext)
    if (dispatchContext === undefined) {
        console.error(
            'User dispatch can only be used within a UserProvider tree'
        )
        return () => {}
    } else {
        return dispatchContext
    }
}

/**
 * withUserID is a higher order component (HOC) for accessing the
 * currently authenticated User's ID. Use it by importing it from this
 * file and wrapping your component at the end of the file with the following:
 *
 * export default withUserID(MyComponent)
 *
 * This will give MyComponent access to the `userID` field through props
 *
 * @param WrappedComponent A React component that needs to access
 * the currently authenticated user's ID.
 */
export function withUserID(WrappedComponent: any) {
    return class extends React.PureComponent {
        render() {
            return (
                <UserStateContext.Consumer>
                    {userState => (
                        <WrappedComponent
                            userID={
                                userState &&
                                userState.active &&
                                userState.active.id
                            }
                            {...this.props}
                        />
                    )}
                </UserStateContext.Consumer>
            )
        }
    }
}
export function withUserStore(WrappedComponent: any) {
    // TODO: Refactor to use UserStateContext.Consumer
    return class extends React.PureComponent {
        render() {
            return (
                <UserStateContext.Consumer>
                    {userState => (
                        <WrappedComponent
                            userStore={userState}
                            {...this.props}
                        />
                    )}
                </UserStateContext.Consumer>
            )
        }
    }
}

export function withSignup(WrappedComponent: any) {
    const setActiveUserAction = (user, dispatch?: Dispatch) => {
        console.log('User: ', user)
        if (dispatch) {
            dispatch({
                type: userActions.SET_ACTIVE,
                payload: user,
            })
        }
    }
    const signup = (
        username: string,
        password: string,
        dispatch?: Dispatch
    ) => {
        return AuthService.register(username, password).then(authResponse => {
            setActiveUserAction(authResponse, dispatch)
        })
    }

    return class extends React.PureComponent {
        render() {
            return (
                <UserDispatchContext.Consumer>
                    {userDispatch => (
                        <WrappedComponent
                            signup={(username: string, password: string) =>
                                signup(username, password, userDispatch)
                            }
                        />
                    )}
                </UserDispatchContext.Consumer>
            )
        }
    }
}

export function withForgot(WrappedComponent: any) {
    const forgot = (email: string) => {
        console.log('Sending out password verification link.')
        AuthService.forgotPassword(email).then(response => {
            console.log('Link sent.')
            console.log(response)
        })
    }
    return class extends React.PureComponent {
        render() {
            return <WrappedComponent forgot={forgot} {...this.props} />
        }
    }
}
