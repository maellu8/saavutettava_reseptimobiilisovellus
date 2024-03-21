import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// etusivu, haku

export default function Etusivu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>New project, here we come</Text>
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