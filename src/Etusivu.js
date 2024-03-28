import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-new-snap-carousel';
import Ohje from './data';

//import { Card } from '@rneui/themed';

// etusivu, haku

export default function Etusivu({ navigation }) {
  const [text, setText] = useState('');
  const buttonPressed = () => {
    Alert.alert(text);
  };
  
  //TESTAAMATON!
   const { width:screenWidth } = Dimensions.get('window');
   const sliderWidth = screenWidth;
   const itemWidth = screenWidth * 0.6;
  
   //TESTAAMATON!
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

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.searchBox}>
        <FontAwesome name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput style={{flex: 1}}
          placeholder={'Hae resepti'}
          onChangeText={text => setText(text)} value={text} />
      </View>
      <Text>New project, here we come</Text>
      <Text>Kirjoita jotain</Text>
      <Button onPress={buttonPressed} title='Press me' />
      <Button title="Tietoihin"
        onPress={() => navigation.navigate('Tiedot')}
      />
      <Carousel
        Layout='default'
        data={Ohje}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
      <Card title='Ohje'>
        {
          Ohje.map((u, i) => {
            return (
              <View key={i} style={styles.hyvaa}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                //  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
                <Text style={styles.text}>{u.text}</Text>
              </View>
            );
          })
        }
      </Card>
      <Card title='Ohje'>
        <Text style={styles.name}>
          Kinkkupiirakka
        </Text>
        <Text style={{marginBottom: 10}}>
          Suussasulava juusto päällinen kruunaa peruspiirakan
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