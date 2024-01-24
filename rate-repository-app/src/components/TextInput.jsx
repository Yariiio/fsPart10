import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    input: {
        fontSize: theme.fontSizes.subheading,
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
        padding: 10,
    },
    errorInput: {
        borderColor: theme.colors.error,
    },
})

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles.input, error && styles.errorInput, style]
    return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
