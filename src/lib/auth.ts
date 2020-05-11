type AuthorizationHeader = {
    Authorization: string
}

export function buildAuthorizationHeader(token: string): AuthorizationHeader {
    return {
        Authorization: `Bearer ${token}`,
    }
}
