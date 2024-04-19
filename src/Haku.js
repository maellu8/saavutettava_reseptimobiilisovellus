import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, Image, Dimensions, FlatList, Pressable, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function Haku({ navigation }) {
    const [hakusana, setHakusana] = useState('');
    const [list, setList] = useState([]);

//'https://tasty-co.p.rapidapi.com/recipes/search?query=banana'
// Haku testaamatta
// apin tauko käyttörajan ylitys
// Haku nimellä
  const getList = () => {
    fetch(`https://tasty-co.p.rapidapi.com/recipes/search?query=${hakusana}`)
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

  return (
    <SafeAreaProvider style={styles.container}>
        <View style={styles.searchBox} >
            <FontAwesome name="search" size={25} color="black" style={styles.searchIcon} />
            <TextInput style={styles.textInput}
                placeholder={'Search recipe'}
                keyboardType="default"
                returnKeyType='search'
                onChangeText={hakusana => setHakusana(hakusana)} value={hakusana}
            />
            <View style={styles.button}>
                <Button title='Search' onPress= {getList}/>
            </View>
        </View>
        <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
            <FlatList
                keyExtractor={(item, index) => index}
                renderItem={({item}) =>
                    <Card style={styles.view}>
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
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      marginBottom: 3,
      marginTop:5,
    },
    button: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 45,
        borderRadius: 5,
        margin: 10,
        width: '80%',
    }
});