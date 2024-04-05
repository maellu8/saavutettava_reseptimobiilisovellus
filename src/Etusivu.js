import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView, Image, Dimensions, FlatList, Pressable } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-new-snap-carousel';
import Ohje from './data';
//import { API_URL, API_TOKEN } from '@env';

//import { Card } from '@rneui/themed';

// etusivu, haku

export default function Etusivu({ navigation }) {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [list, setList] = useState('');
  const [hakusana, setHakusana] = useState(''); //onko tarpeen? text ok käyttää?

  const buttonPressed = () => {
    Alert.alert(text);
  };

  //'https://tasty-co.p.rapidapi.com/recipes/search?query=banana'
  // Haku testaamatta
// apin tauko käyttörajan ylitys
  const getList = () => {
    fetch(`https://tasty-co.p.rapidapi.com/recipes/search?query=${text}`)
    .then(response => response.json())
    .then(responseJson => setList(responseJson.results))
    .catch(error => {
      Alert.alert('Error', error);
    });
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
// apin tauko käyttörajan ylitys
  async function alle30min() {
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
      console.log(result);
      const res = result.results[0].name;
      const des = result.results[0].description;
      console.log(res);
      console.log(des);
      setName(res);
      setText(des);
    } catch (error) {
      console.error(error);
    }
  }
  alle30min();
  
  const { width:screenWidth } = Dimensions.get('window');
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.6;
  
   const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.text}>{item.text}</Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </View>
   )
//getList() poistettu api-syistä Etsi-buttonista ja search-iconista onPress= {getList}
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.searchBox}>
        <FontAwesome name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput style={{flex: 1}}
          placeholder={'Hae resepti'}
          onChangeText={text => setText(text)} value={text} />
      </View>   
      <Button title="Etsi" onPress= {() => navigation.navigate('Tiedot')}
      />
      <FlatList
        style={{marginLeft: "5%"}}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>
        <View style={styles.view}>
          <Text style={Headers}>{item.name}</Text>
          <Image source={{ uri: item.thumbnail_url}} style={{width:"80%", height:100}} />
        </View>
        }
        data={list}
        ItemSeparatorComponent={listSeparator} />

      <Text>New project, here we come</Text>
      <Text>Kirjoita jotain</Text>
      <Button onPress={buttonPressed} title='Press me' />
      <Button title="Tietoihin"
        onPress={() => navigation.navigate('Tiedot')}
      />
      <View>
          <Text> </Text>
      </View>
      <Carousel
        Layout='default'
        data={Ohje}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
      <Pressable
        onPress={() => navigation.navigate('Tiedot')
        }
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
          <Card title='Ohje' style={styles.card}>
            <Text style={styles.name}>
              Banaanileipä
            </Text>
            <Text style={{marginBottom: 10}}>
              herkku
            </Text>
          </Card>
      </Pressable>

      <Card title='Ohje'>
        {
          Ohje.map((u, i) => {
            return (
              <View key={i} style={styles.hyvaa}>
                <Text style={styles.name}>{u.name}</Text>
                <Text style={styles.text}>{u.text}</Text>
              </View>
            );
          })
        }
      </Card>
      <Card title='Ohje'>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={{marginBottom: 10}}>
          {text}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    width: '80%',
  },
  searchIcon: {
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 5,
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
  card: {
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    borderColor: '#000',
    alignItems: 'stretch',
    height: 360,
    width:350,
  }
});