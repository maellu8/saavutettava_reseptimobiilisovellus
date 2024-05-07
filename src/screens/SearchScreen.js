import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Image, Dimensions, FlatList, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Search from '../components/Search.js';
import styles from '../Styles.js';
import ListVertical from '../components/ListVertical.js';

export default function SearchScreen({ navigation }) {
    const [hakusana, setHakusana] = useState('');
    const [list, setList] = useState([]);

//'https://tasty-co.p.rapidapi.com/recipes/search?query=banana'
// Haku PALAUTTAA TYHJÄN
// Haku nimellä
// API_URL2=tasty-co.p.rapidapi.com
async function getList() {
    const url = `https://tasty-co.p.rapidapi.com/recipes/search?query=${hakusana}`;
    console.log("haettu")
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_TOKEN,
        'X-RapidAPI-Host': process.env.API_URL
      }
    };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log("json " + result)
    setList(result.results);
    console.log("list " + list)
  } catch (error) {
    console.error(error);
  }
}

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

  return (
    <SafeAreaProvider style={styles.container}>
        <Search
            onChangeText={text => setHakusana(text)}
        />
        <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
            <ListVertical
                onPress={(item) => navigation.navigate('DetailsScreen', {item})
                }
                data={list}
            />
            <FlatList
                data={list}
                keyExtractor={(item, index) => index}
                renderItem={({item}) =>
                    <Card style={styles.view}>
                        <Pressable  onPress={() => navigation.navigate('DetailsScreen', {item})}>
                            <Image source={{ uri: item.thumbnail_url}} style={{width:"100%", height:100}} />
                            <Text style={styles.name}>{item.name}</Text>
                        </Pressable>
                    </Card>
                }
                ItemSeparatorComponent={listSeparator}
            />
            </View>
        </ScrollView>
    </SafeAreaProvider>
  );
}