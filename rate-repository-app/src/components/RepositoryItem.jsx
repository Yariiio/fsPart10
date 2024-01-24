import { View, StyleSheet, Image } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        width: '100%',
        height: '100%',
        padding: 15,
    },
    languageText: {
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 4,
    },
    topSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    image: {
        width: '80%',
        height: '90%',
        borderRadius: 3,
        marginTop: 5,
        marginLeft: 5,
    },
    bottomSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})

const handleThousands = (number) =>
    number > 999 ? (number / 1000).toFixed(1) : number

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.ownerAvatarUrl }}
                    />
                </View>

                <View style={{ flex: 2 }}>
                    <Text fontWeight='bold'> {item.fullName}</Text>
                    <Text color='textSecondary'> {item.description}</Text>
                    <View style={{ flexWrap: 'wrap' }}>
                        <Text style={styles.languageText} color='white'>
                            {item.language}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View>
                    <Text fontWeight='bold'>
                        {handleThousands(item.stargazersCount)}k
                    </Text>
                    <Text color='textSecondary'>stars</Text>
                </View>
                <View>
                    <Text fontWeight='bold'>
                        {handleThousands(item.forksCount)}k
                    </Text>
                    <Text color='textSecondary'>Forks</Text>
                </View>
                <View>
                    <Text fontWeight='bold'>{item.reviewCount}</Text>
                    <Text color='textSecondary'>Reviews</Text>
                </View>
                <View>
                    <Text fontWeight='bold'>{item.ratingAverage}</Text>
                    <Text color='textSecondary'>Rating</Text>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem
