import { useApolloClient, useMutation } from '@apollo/client'
import { SIGNIN_USER } from '../grapgql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGNIN_USER)
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password } },
        })

        await authStorage.setAccessToken(data.authenticate.accessToken)
        apolloClient.resetStore()
    }
    return [signIn, result]
}

export default useSignIn
