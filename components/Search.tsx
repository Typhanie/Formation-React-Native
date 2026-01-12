import React, {useState} from 'react';
import { } from 'react-native';
import { TextInput } from 'react-native';

export default function Search() {
    const [city, setCity] = useState('Nantes')

    return (
        <TextInput
            underlineColorAndroid='transparent'
            style={{height: 40, borderColor: 'grey', borderWidth: 1}}
            onChangeText={(text) => setCity(text)}
            value={city}
        />
    )
}
