import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:5000/graphql';

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
});

const REALTOR_DETAILS_FRAGMENT = gql`
    fragment RealtorDetail on Realtor {
        id
        userName
        fullName
        email
        avatarImage
        experience
        bio
        city
        sold
        specialization
    }
`;

export const REALTORS_SEARCH_QUERY = gql`
    query RealtorSearchQuery($city: String!, $name: String) {
        searchRealtors(city: $city, name: $name) {
            ...RealtorDetail
        }
    }   
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const REALTOR_LOGIN_QUERY = gql`
    query loginRealtor($email: String!, $password: String!) {
        loginRealtor(email: $email, password: $password) {
            token,
            realtor {
                ...RealtorDetail
            }
        }
    }   
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const GET_AUTH_REALTOR_QUERY = gql`
    query Get_Auth_Realtor {
        authRealtorProfile {
            ...RealtorDetail
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const REGISTER_REALTOR_MUTATION = gql`
    mutation Register_Realtor($newRealtor: RealtorInput!) {
        registerRealtor(newRealtor: $newRealtor) {
            token
            realtor {
                ...RealtorDetail
            }
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

