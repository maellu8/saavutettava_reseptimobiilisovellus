import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// etusivu, haku

export default function Etusivu({ navigation }) {
  const [text, setText] = useState('');
  const buttonPressed = () => {
    Alert.alert(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <FontAwesome name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput style={{flex: 1}}
          placeholder={'Hae resepti'}
          onChangeText={text => setText(text)} value={text} />
      </View>
      <Text>New project, here we come</Text>
      <Text>Kirjoita jotain</Text>
      <Button onPress={buttonPressed} title='Press me' />
      <Button title="Tietoihin"
        onPress={() => navigation.navigate('Tiedot')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    width: '80%',
  },
  searchIcon: {
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'center',
  }
});