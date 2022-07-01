import { useMemo } from 'react'
import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof(window) == undefined,
        uri: process.env.NEXT_PUBLIC_API_URL,
        cache: new InMemoryCache(),
    })
}

function initializeApolloSSR() {
    const apolloClientGlobal = apolloClient || createApolloClient()
    return apolloClientGlobal;
}

function initializeApolloClient(initialState = {}) {
    const apolloClientGlobal = apolloClient || createApolloClient()

    if (initialState) {
        apolloClientGlobal.cache.restore(initialState)
    }

    apolloClient = apolloClient || apolloClientGlobal
    return apolloClient
}

function useApollo(initialState = {}) {
    const store = useMemo(() => initializeApolloClient(initialState), [initialState])
    return store
}

export {useApollo, initializeApolloSSR, initializeApolloClient}