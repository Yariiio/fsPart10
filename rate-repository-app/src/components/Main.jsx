import { View, StyleSheet } from 'react-native'
import RepositoryList from './RepositoryList'
import theme from '../theme'
import AppBar from './AppBar'
import { Routes, Route, Navigate } from 'react-router-native'
import SignIn from './SignIn'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: theme.colors.grey,
        fontFamily: theme.fonts.main,
    },
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </View>
    )
}

export default Main
