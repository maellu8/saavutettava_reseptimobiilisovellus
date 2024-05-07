import React from 'react';
import { Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Styles.js';

// Painike, josta pääsee SearchScreeniin
export default function ButtonToSearch({onPress}) {
    return(
        <Pressable style={styles.searchBox}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Tap"
            accessibilityHint='Navigate to the search screen'
            onPress={onPress}
        >
            <FontAwesome name="search" size={25} color="black" style={styles.searchIcon} />
            <Text style={styles.textInput}>Search recipe</Text>
        </Pressable>
    )
}