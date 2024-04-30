import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Item, Card, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from 'react-native-elements';
import TestData from './TestData';

// reseptin tiedot parametrinä

export default function Tiedot({ navigation, route }) {
  const [item, setItem] = useState(route.params.item);
  const ainekset = item.sections[0].components; // ainesosat ja mitat
  const valmistusohje = item.instructions; // valmistuohje

  const listSeparator = () => {
    return (
      <View style={{
        height: 1,
        width:"80%",
        marginLeft:"10%"
      }}
      />
      );
    };

// Reseptin kuva, kuvaus, ainekset ja valmistusohje
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.imageDetails}>
            <Image source={{ uri: item.thumbnail_url}} style={{width:"100%", height:150, flex:1 }} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.text}>{item.description}</Text>
          </View>
          <View style={styles.detailsContainer}>
          <Text style={styles.title}>Ingredients:</Text>
            <FlatList
              renderItem={({item}) =>
                <Text style={styles.list}>{item.raw_text}</Text>
              }
              keyExtractor={(item, index) => index}
              data={ainekset}
              ItemSeparatorComponent={listSeparator}
            />
          </View>
          <View style={styles.detailsContainer}>
          <Text style={styles.title}>Instructions:</Text>
            <FlatList
              renderItem={({item}) =>
                <Text style={styles.text}>{item.display_text}</Text>
              }
              keyExtractor={(item, index) => index}
              data={valmistusohje}
              ItemSeparatorComponent={listSeparator}
            />
          </View>      
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfe9e2',
  },
  scrollView: {
    marginHorizontal: 15,
    marginBottom: 20,
    marginTop:10,
  },
  detailsContainer: {
    flex:1,
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 3,
    marginTop:5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:5,
  },
  list: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});