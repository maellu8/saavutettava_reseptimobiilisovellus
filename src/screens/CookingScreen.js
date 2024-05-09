import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../Styles.js';
import ListVertical from '../components/ListVertical.js';

// Ruokaisat ruoat listaus

export default function CookingScreen({ navigation }) {
  const [list, setList] = useState([]);

//Tagina dinner, antaa 20 tulosta

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
    } catch (error) {
      console.error(error);
    }
  }
 
   useEffect(() => {
    fetchData();
    console.log(list);
   }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ListVertical
           onPress={(item) => navigation.navigate('DetailsScreen', {item})
           }
           data={list}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}