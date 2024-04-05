import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// reseptin tiedot parametrinä

export default function Tiedot({ navigation }) {
  const [item, setItem] = useState(''); //testiin

  return (
    <View style={styles.container}>
      <Text>Kuva annoksesta</Text>
      <Image source={{ uri: item.thumbnail_url}} style={{width:"80%", height:100}} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.text}>{item.description}</Text>
      <Text style={styles.text}>{item} valmistusaika jos tarvii</Text>
      <Text style={styles.text}>{item} mittayksiköt ja ainesosat</Text>
      <Text>Ohje</Text>
      <Text style={styles.name}>{item} Sanallinen ohje</Text>
      <Button title="Etusivulle"
        onPress={() => navigation.navigate('Etusivu')}
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
  }
});