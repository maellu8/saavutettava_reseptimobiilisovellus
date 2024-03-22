import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// Leivonta-listaus

export default function Leivonta({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Leipaistaan</Text>
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