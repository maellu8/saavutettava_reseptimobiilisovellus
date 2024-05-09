import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Search from '../components/Search.js';
import styles from '../Styles.js';
import ListVertical from '../components/ListVertical.js';

export default function SearchScreen({ navigation }) {
    const [hakusana, setHakusana] = useState('');
    const [list, setList] = useState([]);

// Haku nimellä

async function getList() {
    const url = `https://tasty-co.p.rapidapi.com/recipes/search?query=${hakusana}`;
    console.log("haettu")
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_TOKEN,
        'X-RapidAPI-Host': tasty-co.p.rapidapi.com
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
            </View>
        </ScrollView>
    </SafeAreaProvider>
  );
}