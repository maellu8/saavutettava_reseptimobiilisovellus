import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Styles.js';

// Hakuominaisuus
export default function Search({onChangeText}) {
    const [hakusana, setHakusana] = useState('');

    return (
        <View style={styles.searchBox} >
        <FontAwesome name="search" size={25} color="black" style={styles.searchIcon} />
        <TextInput style={styles.textInput}
            placeholder='Search recipe'
            keyboardType="default"
            returnKeyType='search'
            onChangeText={text => setHakusana(text)}
            value={hakusana}
        />
        </View>
    )
}