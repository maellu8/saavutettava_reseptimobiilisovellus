import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Image, Dimensions, FlatList, Pressable } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-new-snap-carousel';
import Ohje from './data'; //testii

// etusivu
export default function Etusivu({ navigation }) {
  const [text, setText] = useState(''); //testissä
  const [name, setName] = useState(''); //testissä
  const [quickList, setQuickList] = useState([]);
  const [springList, setSpringList] = useState([]);
  const [difficultList, setDifficultList] = useState([]);
  
  // karusellin kokomääritykset
  const { width:screenWidth } = Dimensions.get('window');
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.6;

  const buttonPressed = () => {
    Alert.alert(text);
  };

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
   /*   const res = result.results[0].name;
      const des = result.results[0].description;
      console.log(res);
      console.log(des);
      setName(res);
      setText(des);*/
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
   /*   const res = result.results[0].name;
      const des = result.results[0].description;
      console.log(res);
      console.log(des);
      setName(res);
      setText(des);*/
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
   /*   const res = result.results[0].name;
      const des = result.results[0].description;
      console.log(res);
      console.log(des);
      setName(res);
      setText(des);*/
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
  
  // rendelöi karusellin sisällön, kuva ja teksti on painike
   const renderItem = ({item}) => (
    <Pressable style={styles.itemContainer}
      accessible={true}
      accessibilityRole="imagebutton"
      accessibilityLabel="Tap the button"
      accessibilityHint="Navigates to recipe's details"
      onPress={() => 
        navigation.navigate('Tiedot', {item})
        }
    >
      <Image source={{ uri: item.thumbnail_url}} style={{width:itemWidth, height:100, borderRadius: 8}} />
      <Text style={styles.name} accessibilityRole="text">{item.name}</Text>
    </Pressable>
   )

// haku on vain painike, vie hakusivun toiminnallisuuteen. Haku on stabiili
// reseptikaruselli x2, korttia napauttamalla pääsee reseptien tietoihin
// korttilistaus vertikaalisesti, korttia napauttamalla pääsee reseptien tietoihin
  return (
    <SafeAreaProvider style={styles.container}>
      <Pressable style={styles.searchBox}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Tap"
        accessibilityHint='Navigate to search screen'
        onPress={() => navigation.navigate('Ohje')
        }
      >
        <FontAwesome name="search" size={25} color="black" style={styles.searchIcon} />
        <TextInput style={styles.textInput}
          placeholder={'Search recipe'}
        />
      </Pressable>
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
          <Carousel
            accessible={true}
            accessibilityLabel="Carousel"
            accessibilityHint="Scroll to the left to see recipies and back to the right"
            accessibilityRole="adjustable"
            showsHorizontalScrollIndicator={true}
            Layout='default'
            data={quickList}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>
        <View style={styles.carousel} accessible={true}>
          <Text style={styles.name}
            accessible={true}
            accessibilityRole='text'>
            Spring Recipes</Text>
          <Carousel
            accessible={true}
            accessibilityLabel="Carousel"
            accessibilityHint="Scroll to the left to see recipies and back to the right"
            accessibilityRole="adjustable"
            showsHorizontalScrollIndicator={true}
            Layout='default'
            data={springList}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>
        <View style={styles.carousel} accessible={true}>
          <Text style={styles.name}
            accessible={true}
            accessibilityRole='text'>
            Take Your Time Recipes
          </Text>
          <View style={styles.flatlist}>
          <FlatList
            accessible={true}
            accessibilityRole='grid'
            accessibilityLabel="List"
            accessibilityHint="Scroll vertically to review recipies"
            data={difficultList}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <Card style={styles.view}>
              <Pressable
                accessible={true}
                accessibilityRole="imagebutton"
                accessibilityLabel='Tap'
                accessibilityHint='Navigate to recipe details'
                onPress={() => navigation.navigate('Tiedot', {item})
                }
              >
                <Image source={{ uri: item.thumbnail_url}} style={{width:"100%", height:100}} />
                <Text style={styles.name} accessibilityRole="text">{item.name}</Text>
              </Pressable>
              </Card>
             )}
             ItemSeparatorComponent={listSeparator}
          />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfe9e2',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 45,
    borderRadius: 5,
    margin: 10,
    width: '80%',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    margin: 5,
    marginLeft: 10,
    marginRight: 20,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop:10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfe9e2',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 3,
    marginTop:5,
  },
  itemContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#000', // eit oimi
    padding: 10, // ei nähtävästi vaikuta
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  card: {
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#000', // eit oimi
    padding: 10, // ei nähtävästi vaikuta
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width:'80%',
  },
  flatlist: {
    marginBottom:40,
    marginRight:20,
  },
  carousel: {
    marginTop: 15,
  },
});