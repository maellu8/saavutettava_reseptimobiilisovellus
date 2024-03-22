import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// Ruokaisat ruoat listaus

export default function Ruokaisa({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ruokaohjetta pukkaa</Text>
      <StatusBar style="auto" />
      <Button title="Tietoihin"
        onPress={() => navigation.navigate('Tiedot')}
      />
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
});