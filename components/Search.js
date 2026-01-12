import React, {useState} from 'react';
import { TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../Style';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './List';

function Search() {
    const [city, setCity] = useState('Nantes')
    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('Result', {city: city});
    }
    return (
        <View style={style.container}>
            <TextInput
                underlineColorAndroid='transparent'
                style={style.input}
                onChangeText={(text) => setCity(text)}
                value={city}
            /> 
            <Button
                color={style.color}
                title="Rechercher"
                onPress={handleSubmit}
            >

            </Button>
        </View>


    )
}


const Stack = createNativeStackNavigator();
const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}
export default function SearchStackNav() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Search" component={Search} options={navigationOptions}/>
      <Stack.Screen 
        name="Result" 
        component={List} 

        options={({ route }) => ({
          title: route?.params?.city ? `Météo - ${route.params.city}` : 'Météo',
        })}
      />
    </Stack.Navigator>
  );
}

