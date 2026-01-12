import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function About() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>A propos de moi</Text>
                <Text>
                    Après une expérience significative dans le commerce, je me
                    suis reconvertie dans le développement informatique depuis
                    2016. J&apos;ai maintenant acquis une importante expérience au
                    sein de Wiztivi. Je souhaite aujourd&apos;hui relever de nouveaux
                    challenges.
                </Text>
                <ActivityIndicator style={styles.view} color="#FF000" size="large" animating={true}/>
            </View>
        )
}

const styles = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        justifyContent: "center"
    }
})