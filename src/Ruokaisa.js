import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';

// Ruokaisat ruoat listaus

export default function Ruokaisa({ navigation }) {
  const [text, setText] = useState(''); //testiversiossa
  const [name, setName] = useState(''); //testiversiossa
  const [list, setList] = useState([]);

//Tagina dinner, antaa 20 tulosta
// nimen vaihto??
//  apin tauko käyttörajan ylitys
  async function fetchData() {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=dinner';
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

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => index}
            renderItem={({item}) =>
            <Card title='Dinner' style={styles.view}>
              <Pressable  onPress={() => navigation.navigate('Tiedot')}>
                <Image source={{ uri: item.thumbnail_url}} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfe9e2',
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop:10,
  },
  image: {
    width:"100%",
    height:100,
    resizeMode:"cover",
    padding:0,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 3,
    marginTop: 5,
  },
  itemContainer: {
    marginTop: 20,
    backgroundColor: '#7a82e5',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
});