import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// reseptin tiedot

export default function Tiedot({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tähän tulee reseptin tiedot</Text>
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