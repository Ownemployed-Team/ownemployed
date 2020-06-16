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

function userReducer(state: UserState, action: Action): UserState {
    switch (action.type) {
        default:
            console.warn('Action not supported')
            return state
    }
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

export function withUserID(ChildComponent) {
    return class extends React.PureComponent {}
}
