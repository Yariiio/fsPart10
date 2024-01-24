import { View, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
})

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: theme.colors.white,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
        padding: 10,
        alignItems: 'center',
    },
})

const initialValues = {
    username: '',
    password: '',
}

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput
                            name='username'
                            placeholder='Username'
                            placeholderTextColor={theme.colors.grey}
                        />
                        <FormikTextInput
                            name='password'
                            placeholder='Password'
                            secureTextEntry
                            placeholderTextColor={theme.colors.grey}
                        />

                        <Pressable style={styles.button} onPress={handleSubmit}>
                            <Text
                                fontWeight='bold'
                                color='white'
                                fontSize='subheading'
                            >
                                Sign in
                            </Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SignIn
