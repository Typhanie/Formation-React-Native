import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../Style';

export default function About() {
    const navigation = useNavigation();


    const handleSearch = () => {
        navigation.navigate('Search');
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>À propos de moi</Text>
            <Text>
                Après une expérience significative dans le commerce, je me
                suis reconvertie dans le développement informatique depuis
                2016. J'ai maintenant acquis une importante expérience au
                sein de Wiztivi. Je souhaite aujourd'hui relever de nouveaux
                challenges.
            </Text>
            <Button 
                color={style.color}
                onPress={handleSearch}
                title='Rechercher une ville'>                        
            </Button>
        </View>
    )
}