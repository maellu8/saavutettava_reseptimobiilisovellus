import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';
import styles from '../Styles.js';
import ListVertical from '../components/ListVertical.js';

// Ruokaisat ruoat listaus

export default function CookingScreen({ navigation }) {
  const [text, setText] = useState(''); //testiversiossa
  const [name, setName] = useState(''); //testiversiossa
  const [list, setList] = useState([]);

//Tagina dinner, antaa 20 tulosta
// nimen vaihto??
//  apin tauko käyttörajan ylitys
  async function fetchData() {
  /*  const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=dinner';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_TOKEN,
        'X-RapidAPI-Host': process.env.API_URL
      }
    }; */

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setList(result.results);
      console.log("ruokaisa " + list);
      /*testiversiossa:
      const res = result.results[13].name;
      const des = result.results[13].description;
      console.log("Ruokaisa: " + res);
      console.log("Ruokaisa: " + des);
      setName(res);
      setText(des);
      */
    } catch (error) {
      console.error(error);
    }
  }
 
   useEffect(() => {
    fetchData();
    console.log(list);
   }, []);
 
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
  
  //KS scrollView, onko 10 jees? itemContainer:marginTop: 10?

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ListVertical
           onPress={() => navigation.navigate('DetailsScreen', {item})
           }
           data={list}
        />
        <View style={styles.view}>
          <FlatList
            keyExtractor={(item, index) => index}
            renderItem={({item}) =>
            <Card title='Dinner' style={styles.view}>
              <Pressable  onPress={() => navigation.navigate('Tiedot')}>
                <Image source={{ uri: item.thumbnail_url}} style={styles.imageCook} />
                <Text style={styles.name}>{item.name}</Text>
              </Pressable>
            </Card>
            }
            data={list}
            ItemSeparatorComponent={listSeparator} />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}