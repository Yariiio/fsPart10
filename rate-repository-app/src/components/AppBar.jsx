import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.textPrimary,
        padding: 15,
        flexDirection: 'row',
    },
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/'>
                    <Text style={styles.text} color='white'>
                        Repositories
                    </Text>
                </Link>
                <Link to='/signin'>
                    <Text style={{ paddingLeft: 20 }} color='white'>
                        Sign in
                    </Text>
                </Link>
            </ScrollView>
        </View>
    )
}

export default AppBar
