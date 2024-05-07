import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Item, Card, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../Styles.js';
import { ListItem } from 'react-native-elements';
import TestData from '../TestData';

// reseptin tiedot parametrinä

export default function DetailsScreen({ navigation, route }) {
  const [item, setItem] = useState(route.params.item); // tiedot parametrinä
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