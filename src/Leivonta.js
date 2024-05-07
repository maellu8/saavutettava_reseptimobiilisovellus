import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';
import styles from './Styles.js';

// Leivonta-listaus
//TESTAAMATON BUILD
export default function Leivonta({ navigation }) {
  const [text, setText] = useState(''); //testiversiossa
  const [name, setName] = useState(''); //testiversiossa
  const [list, setList] = useState([]);

//Tagina desserts, antaa 20 tulosta

  async function fetchDes() {
 /*   const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=desserts';
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
      console.log("leivonta " + list);
      /*testiversiossa:
      const res = result.results[13].name;
      const des = result.results[13].description;
      console.log("Leivonta: " + res);
      console.log("Leivonta: " + des);
      setName(res);
      setText(des);
      */
    } catch (error) {
      console.error(error);
    }
  }

   useEffect(() => {
    fetchDes();
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
      <View style={styles.view}>
        <FlatList
           keyExtractor={(item, index) => index}
           renderItem={({item}) =>
           <Card title='Dinner' style={styles.itemContainer}>
              <Pressable  onPress={() => navigation.navigate('Tiedot')}>
                <Image source={{ uri: item.thumbnail_url}} style={{width:"100%", height:100}} />
                <Text style={styles.name}>{item.name}</Text>
              </Pressable>
           </Card>
           }
           data={list}
           ItemSeparatorComponent={listSeparator}
        />
      </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}