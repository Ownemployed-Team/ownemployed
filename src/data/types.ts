import React from 'react'

export type Dispatch = (action: any) => void
export interface Action {
    type: string
    payload: any
}
export interface ProviderProps {
    children: React.ReactNode
}
