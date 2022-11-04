import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

import { REALTORS_SEARCH_QUERY, REGISTER_REALTOR_MUTATION, GET_AUTH_REALTOR_QUERY } from './queries';
import { newRealtor } from '../types';

export const useRealtors = (city: string, name: string) => {
    const { data, loading, error } = useQuery(REALTORS_SEARCH_QUERY, {
        variables: { city, name },
        fetchPolicy: 'network-only'
    });
    return {
        realtors: data?.searchRealtors,
        loading,
        error: Boolean(error)
    };
};

export const useGetRealtor = () => {
    const [ getProfile ] = useLazyQuery(GET_AUTH_REALTOR_QUERY);
    return {
        getProfile
    }
};

export const useRegisterRealtor = () => {
    const [ mutate, { loading, error } ] = useMutation(REGISTER_REALTOR_MUTATION);
    return {
        regNewRealtor: async (newRealtor: newRealtor) => {
            
            const { data: { registerRealtor: { token, realtor } } } = await mutate({
                variables: { newRealtor }
            });
            return {
                token, realtor
            }
        },
        loading,
        error
    }
};