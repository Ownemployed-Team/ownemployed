import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as React from 'react'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
}

export type AddContributorsInput = {
    id: Scalars['String']
    contributorIds: Array<Scalars['String']>
}

export type GetMembersInput = {
    skip?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
}

export type Location = {
    __typename?: 'Location'
    id: Scalars['String']
    name: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
}

export type Member = {
    __typename?: 'Member'
    id: Scalars['String']
    firstName: Scalars['String']
    lastName?: Maybe<Scalars['String']>
    email: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    ownedProjects?: Maybe<Array<Maybe<Project>>>
    headline?: Maybe<Scalars['String']>
    education?: Maybe<Scalars['String']>
    bio?: Maybe<Scalars['String']>
    location?: Maybe<Scalars['String']>
    remote?: Maybe<Scalars['Boolean']>
    skills?: Maybe<Array<Maybe<Tag>>>
    sectors?: Maybe<Array<Maybe<Tag>>>
    socialMedia?: Maybe<Array<Maybe<SocialMedia>>>
    avatar?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
}

export type MemberSocialMediaInput = {
    name: Scalars['String']
    url: Scalars['String']
}

export type MemberTagInput = {
    id: Scalars['String']
}

export type Mutation = {
    __typename?: 'Mutation'
    addMember?: Maybe<Member>
    updateMember?: Maybe<Member>
    removeMember?: Maybe<Member>
    addProject?: Maybe<Project>
    removeProjects?: Maybe<Scalars['Boolean']>
    updateProject?: Maybe<Project>
    addContributors?: Maybe<Project>
    removeContributors?: Maybe<Project>
}

export type MutationAddMemberArgs = {
    data?: Maybe<NewMemberInput>
}

export type MutationUpdateMemberArgs = {
    data?: Maybe<UpdateMemberInput>
}

export type MutationRemoveMemberArgs = {
    data?: Maybe<UpdateMemberInput>
}

export type MutationAddProjectArgs = {
    data?: Maybe<NewProjectInput>
}

export type MutationRemoveProjectsArgs = {
    data?: Maybe<RemoveProjectsInput>
}

export type MutationUpdateProjectArgs = {
    data?: Maybe<UpdateProjectInput>
}

export type MutationAddContributorsArgs = {
    data?: Maybe<AddContributorsInput>
}

export type MutationRemoveContributorsArgs = {
    data?: Maybe<RemoveContributorsInput>
}

export type NewMemberInput = {
    email: Scalars['String']
    firstName: Scalars['String']
    lastName: Scalars['String']
    headline?: Maybe<Scalars['String']>
    education?: Maybe<Scalars['String']>
    bio?: Maybe<Scalars['String']>
    location?: Maybe<Scalars['String']>
    remote?: Maybe<Scalars['Boolean']>
    skills?: Maybe<Array<Maybe<MemberTagInput>>>
    sectors?: Maybe<Array<Maybe<MemberTagInput>>>
    socialMedia?: Maybe<Array<Maybe<MemberSocialMediaInput>>>
    emailVisibility?: Maybe<Scalars['Boolean']>
    avatar?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
}

export type NewProjectInput = {
    name: Scalars['String']
    ownerId: Scalars['String']
    contributors?: Maybe<Array<Maybe<Scalars['String']>>>
    summary?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    status?: Maybe<Scalars['String']>
    remote?: Maybe<Scalars['Boolean']>
    sectors?: Maybe<Array<Maybe<Scalars['String']>>>
    skillsRequired?: Maybe<Array<Maybe<Scalars['String']>>>
    picture?: Maybe<Array<Maybe<Scalars['String']>>>
    website?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Project = {
    __typename?: 'Project'
    id: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    name: Scalars['String']
    owner: Member
    contributors?: Maybe<Array<Maybe<Member>>>
    summary?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    status?: Maybe<Scalars['String']>
    location?: Maybe<Array<Maybe<Location>>>
    remote?: Maybe<Array<Maybe<Scalars['String']>>>
    sectors?: Maybe<Array<Maybe<Tag>>>
    skillsRequired?: Maybe<Array<Maybe<Tag>>>
    picture?: Maybe<Scalars['String']>
    website?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Query = {
    __typename?: 'Query'
    getMembers?: Maybe<Array<Maybe<Member>>>
    getMember?: Maybe<Member>
    getProjects?: Maybe<Array<Maybe<Project>>>
    getProject?: Maybe<Project>
}

export type QueryGetMembersArgs = {
    data?: Maybe<GetMembersInput>
}

export type QueryGetMemberArgs = {
    id?: Maybe<Scalars['String']>
}

export type QueryGetProjectArgs = {
    id?: Maybe<Scalars['String']>
}

export type RemoveContributorsInput = {
    id: Scalars['String']
    contributorIds: Array<Scalars['String']>
}

export type RemoveProjectsInput = {
    ownerId: Scalars['String']
    projectIds: Array<Scalars['String']>
    soft?: Maybe<Scalars['Boolean']>
}

export type SocialMedia = {
    __typename?: 'SocialMedia'
    id: Scalars['String']
    name: Scalars['String']
    url: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
}

export type Tag = {
    __typename?: 'Tag'
    id: Scalars['String']
    title?: Maybe<Scalars['String']>
    category?: Maybe<Scalars['String']>
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
}

export type UpdateMemberInput = {
    id: Scalars['String']
    email?: Maybe<Scalars['String']>
    firstName?: Maybe<Scalars['String']>
    lastName?: Maybe<Scalars['String']>
    headline?: Maybe<Scalars['String']>
    education?: Maybe<Scalars['String']>
    bio?: Maybe<Scalars['String']>
    location?: Maybe<Scalars['String']>
    status?: Maybe<Scalars['String']>
    remote?: Maybe<Scalars['Boolean']>
    skills?: Maybe<Array<Maybe<UpdateMemberTagInput>>>
    sectors?: Maybe<Array<Maybe<UpdateMemberTagInput>>>
    socialMedia?: Maybe<Array<Maybe<UpdateMemberSocialMediaInput>>>
    emailVisibility?: Maybe<Scalars['Boolean']>
    avatar?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
}

export type UpdateMemberSocialMediaInput = {
    id: Scalars['String']
    name?: Maybe<Scalars['String']>
    url?: Maybe<Scalars['String']>
}

export type UpdateMemberTagInput = {
    id: Scalars['String']
}

export type UpdateProjectInput = {
    id: Scalars['String']
    name?: Maybe<Scalars['String']>
    ownerId?: Maybe<Scalars['String']>
    contributors?: Maybe<Array<Maybe<Scalars['String']>>>
    summary?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    status?: Maybe<Scalars['String']>
    remote?: Maybe<Scalars['Boolean']>
    sectors?: Maybe<Array<Maybe<Scalars['String']>>>
    skillsRequired?: Maybe<Array<Maybe<Scalars['String']>>>
    picture?: Maybe<Scalars['String']>
    website?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type AddProjectMutationVariables = Exact<{
    data?: Maybe<NewProjectInput>
}>

export type AddProjectMutation = { __typename?: 'Mutation' } & {
    addProject?: Maybe<
        { __typename?: 'Project' } & Pick<
            Project,
            'name' | 'description' | 'website' | 'picture'
        > & {
                owner: { __typename?: 'Member' } & Pick<
                    Member,
                    'id' | 'firstName' | 'lastName'
                >
            }
    >
}

export type GetMemberQueryVariables = Exact<{
    id: Scalars['String']
}>

export type GetMemberQuery = { __typename?: 'Query' } & {
    getMember?: Maybe<
        { __typename?: 'Member' } & Pick<
            Member,
            | 'id'
            | 'firstName'
            | 'lastName'
            | 'createdAt'
            | 'education'
            | 'location'
        > & {
                socialMedia?: Maybe<
                    Array<
                        Maybe<
                            { __typename?: 'SocialMedia' } & Pick<
                                SocialMedia,
                                'name' | 'url'
                            >
                        >
                    >
                >
                skills?: Maybe<
                    Array<Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'title'>>>
                >
            }
    >
}

export type GetMembersQueryVariables = Exact<{ [key: string]: never }>

export type GetMembersQuery = { __typename?: 'Query' } & {
    getMembers?: Maybe<
        Array<
            Maybe<
                { __typename?: 'Member' } & Pick<
                    Member,
                    | 'id'
                    | 'firstName'
                    | 'lastName'
                    | 'email'
                    | 'createdAt'
                    | 'education'
                    | 'bio'
                    | 'location'
                    | 'remote'
                    | 'avatar'
                > & {
                        skills?: Maybe<
                            Array<
                                Maybe<
                                    { __typename?: 'Tag' } & Pick<
                                        Tag,
                                        'id' | 'title' | 'category'
                                    >
                                >
                            >
                        >
                        sectors?: Maybe<
                            Array<
                                Maybe<
                                    { __typename?: 'Tag' } & Pick<
                                        Tag,
                                        'id' | 'title' | 'category'
                                    >
                                >
                            >
                        >
                        socialMedia?: Maybe<
                            Array<
                                Maybe<
                                    { __typename?: 'SocialMedia' } & Pick<
                                        SocialMedia,
                                        'name' | 'url'
                                    >
                                >
                            >
                        >
                    }
            >
        >
    >
}

export type GetProjectQueryVariables = Exact<{
    projectId: Scalars['String']
}>

export type GetProjectQuery = { __typename?: 'Query' } & {
    getProject?: Maybe<
        { __typename?: 'Project' } & Pick<
            Project,
            'id' | 'name' | 'createdAt' | 'status' | 'summary' | 'description'
        > & {
                owner: { __typename?: 'Member' } & Pick<Member, 'id'>
                contributors?: Maybe<
                    Array<Maybe<{ __typename?: 'Member' } & Pick<Member, 'id'>>>
                >
            }
    >
}

export type GetProjectsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
}>

export type GetProjectsQuery = { __typename?: 'Query' } & {
    getProjects?: Maybe<
        Array<
            Maybe<
                { __typename?: 'Project' } & Pick<
                    Project,
                    | 'id'
                    | 'name'
                    | 'createdAt'
                    | 'summary'
                    | 'description'
                    | 'status'
                    | 'website'
                    | 'remote'
                    | 'picture'
                > & {
                        owner: { __typename?: 'Member' } & Pick<Member, 'id'>
                        sectors?: Maybe<
                            Array<
                                Maybe<
                                    { __typename?: 'Tag' } & Pick<
                                        Tag,
                                        'id' | 'title' | 'category'
                                    >
                                >
                            >
                        >
                        skillsRequired?: Maybe<
                            Array<
                                Maybe<
                                    { __typename?: 'Tag' } & Pick<
                                        Tag,
                                        'id' | 'title' | 'category'
                                    >
                                >
                            >
                        >
                        contributors?: Maybe<
                            Array<
                                Maybe<
                                    { __typename?: 'Member' } & Pick<
                                        Member,
                                        'id'
                                    >
                                >
                            >
                        >
                    }
            >
        >
    >
}

export const AddProjectDocument = gql`
    mutation AddProject($data: NewProjectInput) {
        addProject(data: $data) {
            name
            owner {
                id
                firstName
                lastName
            }
            description
            website
            picture
        }
    }
`
export type AddProjectMutationFn = ApolloReactCommon.MutationFunction<
    AddProjectMutation,
    AddProjectMutationVariables
>
export type AddProjectComponentProps = Omit<
    ApolloReactComponents.MutationComponentOptions<
        AddProjectMutation,
        AddProjectMutationVariables
    >,
    'mutation'
>

export const AddProjectComponent = (props: AddProjectComponentProps) => (
    <ApolloReactComponents.Mutation<
        AddProjectMutation,
        AddProjectMutationVariables
    >
        mutation={AddProjectDocument}
        {...props}
    />
)

export type AddProjectProps<
    TChildProps = {},
    TDataName extends string = 'mutate'
> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<
        AddProjectMutation,
        AddProjectMutationVariables
    >
} &
    TChildProps
export function withAddProject<
    TProps,
    TChildProps = {},
    TDataName extends string = 'mutate'
>(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        AddProjectMutation,
        AddProjectMutationVariables,
        AddProjectProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withMutation<
        TProps,
        AddProjectMutation,
        AddProjectMutationVariables,
        AddProjectProps<TChildProps, TDataName>
    >(AddProjectDocument, {
        alias: 'addProject',
        ...operationOptions,
    })
}
export type AddProjectMutationResult = ApolloReactCommon.MutationResult<
    AddProjectMutation
>
export type AddProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
    AddProjectMutation,
    AddProjectMutationVariables
>
export const GetMemberDocument = gql`
    query getMember($id: String!) {
        getMember(id: $id) {
            id
            firstName
            lastName
            createdAt
            socialMedia {
                name
                url
            }
            skills {
                title
            }
            education
            location
        }
    }
`
export type GetMemberComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<
        GetMemberQuery,
        GetMemberQueryVariables
    >,
    'query'
> &
    ({ variables: GetMemberQueryVariables; skip?: boolean } | { skip: boolean })

export const GetMemberComponent = (props: GetMemberComponentProps) => (
    <ApolloReactComponents.Query<GetMemberQuery, GetMemberQueryVariables>
        query={GetMemberDocument}
        {...props}
    />
)

export type GetMemberProps<
    TChildProps = {},
    TDataName extends string = 'data'
> = {
    [key in TDataName]: ApolloReactHoc.DataValue<
        GetMemberQuery,
        GetMemberQueryVariables
    >
} &
    TChildProps
export function withGetMember<
    TProps,
    TChildProps = {},
    TDataName extends string = 'data'
>(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        GetMemberQuery,
        GetMemberQueryVariables,
        GetMemberProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        GetMemberQuery,
        GetMemberQueryVariables,
        GetMemberProps<TChildProps, TDataName>
    >(GetMemberDocument, {
        alias: 'getMember',
        ...operationOptions,
    })
}
export type GetMemberQueryResult = ApolloReactCommon.QueryResult<
    GetMemberQuery,
    GetMemberQueryVariables
>
export const GetMembersDocument = gql`
    query getMembers {
        getMembers {
            id
            firstName
            lastName
            email
            createdAt
            education
            bio
            location
            remote
            skills {
                id
                title
                category
            }
            sectors {
                id
                title
                category
            }
            socialMedia {
                name
                url
            }
            avatar
        }
    }
`
export type GetMembersComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<
        GetMembersQuery,
        GetMembersQueryVariables
    >,
    'query'
>

export const GetMembersComponent = (props: GetMembersComponentProps) => (
    <ApolloReactComponents.Query<GetMembersQuery, GetMembersQueryVariables>
        query={GetMembersDocument}
        {...props}
    />
)

export type GetMembersProps<
    TChildProps = {},
    TDataName extends string = 'data'
> = {
    [key in TDataName]: ApolloReactHoc.DataValue<
        GetMembersQuery,
        GetMembersQueryVariables
    >
} &
    TChildProps
export function withGetMembers<
    TProps,
    TChildProps = {},
    TDataName extends string = 'data'
>(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        GetMembersQuery,
        GetMembersQueryVariables,
        GetMembersProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        GetMembersQuery,
        GetMembersQueryVariables,
        GetMembersProps<TChildProps, TDataName>
    >(GetMembersDocument, {
        alias: 'getMembers',
        ...operationOptions,
    })
}
export type GetMembersQueryResult = ApolloReactCommon.QueryResult<
    GetMembersQuery,
    GetMembersQueryVariables
>
export const GetProjectDocument = gql`
    query getProject($projectId: String!) {
        getProject(id: $projectId) {
            id
            name
            createdAt
            owner {
                id
            }
            contributors {
                id
            }
            status
            summary
            description
        }
    }
`
export type GetProjectComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<
        GetProjectQuery,
        GetProjectQueryVariables
    >,
    'query'
> &
    (
        | { variables: GetProjectQueryVariables; skip?: boolean }
        | { skip: boolean }
    )

export const GetProjectComponent = (props: GetProjectComponentProps) => (
    <ApolloReactComponents.Query<GetProjectQuery, GetProjectQueryVariables>
        query={GetProjectDocument}
        {...props}
    />
)

export type GetProjectProps<
    TChildProps = {},
    TDataName extends string = 'data'
> = {
    [key in TDataName]: ApolloReactHoc.DataValue<
        GetProjectQuery,
        GetProjectQueryVariables
    >
} &
    TChildProps
export function withGetProject<
    TProps,
    TChildProps = {},
    TDataName extends string = 'data'
>(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        GetProjectQuery,
        GetProjectQueryVariables,
        GetProjectProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        GetProjectQuery,
        GetProjectQueryVariables,
        GetProjectProps<TChildProps, TDataName>
    >(GetProjectDocument, {
        alias: 'getProject',
        ...operationOptions,
    })
}
export type GetProjectQueryResult = ApolloReactCommon.QueryResult<
    GetProjectQuery,
    GetProjectQueryVariables
>
export const GetProjectsDocument = gql`
    query getProjects($skip: Int, $take: Int) {
        getProjects {
            id
            name
            createdAt
            owner {
                id
            }
            summary
            description
            status
            website
            remote
            sectors {
                id
                title
                category
            }
            skillsRequired {
                id
                title
                category
            }
            contributors {
                id
            }
            picture
        }
    }
`
export type GetProjectsComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<
        GetProjectsQuery,
        GetProjectsQueryVariables
    >,
    'query'
>

export const GetProjectsComponent = (props: GetProjectsComponentProps) => (
    <ApolloReactComponents.Query<GetProjectsQuery, GetProjectsQueryVariables>
        query={GetProjectsDocument}
        {...props}
    />
)

export type GetProjectsProps<
    TChildProps = {},
    TDataName extends string = 'data'
> = {
    [key in TDataName]: ApolloReactHoc.DataValue<
        GetProjectsQuery,
        GetProjectsQueryVariables
    >
} &
    TChildProps
export function withGetProjects<
    TProps,
    TChildProps = {},
    TDataName extends string = 'data'
>(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        GetProjectsQuery,
        GetProjectsQueryVariables,
        GetProjectsProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        GetProjectsQuery,
        GetProjectsQueryVariables,
        GetProjectsProps<TChildProps, TDataName>
    >(GetProjectsDocument, {
        alias: 'getProjects',
        ...operationOptions,
    })
}
export type GetProjectsQueryResult = ApolloReactCommon.QueryResult<
    GetProjectsQuery,
    GetProjectsQueryVariables
>
