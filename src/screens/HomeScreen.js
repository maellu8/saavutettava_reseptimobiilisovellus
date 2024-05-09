import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../Styles.js';
import ListVertical from '../components/ListVertical.js';
import ButtonToSearch from '../components/ButtonToSearch.js';
import ListHorizontal from '../components/ListHorizontal.js';

// etusivu
export default function HomeScreen({ navigation }) {
  const [quickList, setQuickList] = useState([]);
  const [springList, setSpringList] = useState([]);
  const [difficultList, setDifficultList] = useState([]);

// listaa reseptit, joiden valmistusaika on alle 30 min
 async function quick() {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
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
      setQuickList(result.results);
      console.log("quick " + quickList);
    } catch (error) {
      console.error(error);
    }
  }

  // listaa kevätkauden reseptit
  async function spring() {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=spring';
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
      setSpringList(result.results);
      console.log("spring " + springList);
    } catch (error) {
      console.error(error);
    }
  }

// listaa reseptit, joiden valmistusaika on alle 1 tunti
  async function difficult() {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_1_hour';
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
      setDifficultList(result.results);
      console.log("difficulty " + difficultList);
    } catch (error) {
      console.error(error);
    }
  }

 useEffect(() => {
  quick();
  console.log(quickList);
 }, []);

 useEffect(() => {
  spring();
  console.log(springList);
 }, []);

 useEffect(() => {
  difficult();
  console.log(difficultList);
 }, []);

// haku on painike, vie hakusivun toiminnallisuuteen. Haku on stabiili
// reseptikaruselli x2, korttia napauttamalla pääsee reseptien tietoihin
// korttilistaus vertikaalisesti, korttia napauttamalla pääsee reseptien tietoihin
  return (
    <SafeAreaProvider style={styles.container}>
      <ButtonToSearch
        onPress={() => navigation.navigate('SearchScreen')
        }
      />
      <ScrollView style={styles.scrollView}
        accessible={true}
        accessibilityRole="grid"
        accessibilityLabel='Scroll vertical'
        accessibilityHint='Scroll the view to the top reviewing whole content'
      >
        <View style={styles.carousel}
          accessible={true}>
          <Text style={styles.name}
            accessible={true}
            accessibilityRole='text'>
            Quick Recipes</Text>
          <ListHorizontal
            onPress={(item) => navigation.navigate('DetailsScreen', {item})
            }
            data={quickList}
          />
        </View>
        <View style={styles.carousel} accessible={true}>
            <Text style={styles.name}
                accessible={true}
                accessibilityRole='text'>
                Spring Recipes</Text>
            <ListHorizontal
                onPress={(item) => navigation.navigate('DetailsScreen', {item})
                }
                data={springList}
            />
        </View>
        <View style={styles.carousel} accessible={true}>
            <Text style={styles.name}
                accessible={true}
                accessibilityRole='text'>
                Take Your Time Recipes
            </Text>
            <View style={styles.homeFlatlist}>
                <ListVertical
                    onPress={(item) => navigation.navigate('DetailsScreen', {item})
                    }
                    data={difficultList}
                />
            </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};