import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Link, useNavigate } from 'react-router-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'
import { useQuery, useApolloClient } from '@apollo/client'
import { GET_CURRENT_USER } from '../grapgql/queries'

import useAuthStorage from '../hooks/useAuthStorage'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.textPrimary,
        padding: 15,
        flexDirection: 'row',
    },
})

const AppBar = () => {
    const { data } = useQuery(GET_CURRENT_USER)

    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const Navigate = useNavigate()

    const signOut = () => {
        authStorage.removeAccessToken()
        apolloClient.resetStore()
        Navigate('/signin')
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/'>
                    <Text style={styles.text} color='white'>
                        Repositories
                    </Text>
                </Link>
                {data && !data.me ? (
                    <Link to='/signin'>
                        <Text style={{ paddingLeft: 20 }} color='white'>
                            Sign in
                        </Text>
                    </Link>
                ) : (
                    <Pressable onPress={signOut}>
                        <Text style={{ paddingLeft: 20 }} color='white'>
                            Sign out
                        </Text>
                    </Pressable>
                )}
            </ScrollView>
        </View>
    )
}

export default AppBar
