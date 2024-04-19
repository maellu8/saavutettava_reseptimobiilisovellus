import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from 'react-native-elements';

// reseptin tiedot parametrinä

export default function Tiedot({ navigation, route }) {
  const [item, setItem] = useState(route.params.item);
  const [ainekset, setAinekset] = useState([]);
  const [resepti, setResepti] = useState(''); //testiin

  //map-funktiolla/for loopilla taulukosta tavara ulos?

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
          <View style={styles.image}>
            <Image source={{ uri: item.thumbnail_url}} />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>{item.description}</Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>{item.sections[0].components[0].raw_text} </Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>{item.instructions[0].display_text} valmistusohje </Text>
          </View>
          <View style={styles.viewContainer}>
          <FlatList
           keyExtractor={(item, index) => index}
           renderItem={({item}) =>
           <View style={styles}>
                <Text style={styles.text}>{item.instructions.display_text}</Text>
           </View>
           }
           data={item}
           ItemSeparatorComponent={listSeparator} />
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
  scrollView: {
 //   marginHorizontal: 20,
    marginBottom: 20,
    marginTop:10,
  },
  image: {
    flex:1,
    width:'100%',
    height:150,
  },
  viewContainer: {
    flex:1,
    margin: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 3,
    marginTop:5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});