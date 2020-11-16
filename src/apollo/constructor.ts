import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apiUrl = 'https://api.blocktap.io/graphql'

export const client = new ApolloClient({
    uri: apiUrl,
    cache: new InMemoryCache()
});