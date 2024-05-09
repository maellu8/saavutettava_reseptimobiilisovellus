import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../Styles.js';
import ListVertical from '../components/ListVertical.js';

// Leivonta-listaus

export default function BakingScreen({ navigation }) {
  const [list, setList] = useState([]);

//Tagina desserts, antaa 20 tulosta

  async function fetchDes() {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=desserts';
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
    fetchDes();
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