import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';
import styles from '../Styles.js';
import TestData from '../TestData.js'; //paikallinen testidata

export default function ListVertical({onPress, data}) {
 //   const [item, setItem] = useState(props);
   // const [list, setList] = useState([]);

    const listSeparator = () => {
        return (
          <View style={{
            height: 1,
            width:"80%",
            marginLeft:"10%"
          }}/>
        );
    };
//VAIHDA dataksi list testidatan jälkeen
    return(
        <View style={styles.view}>
            <Text>Testiksi tekstiä</Text>
            <FlatList
                keyExtractor={(item, index) => index}
                renderItem={({item}) =>
                    <Card title='Food' style={styles.itemContainer}>
                        <Pressable onPress={() => onPress(item)} >
                            <Image source={{ uri: item.thumbnail_url}} style={{width:"100%", height:100}} />
                            <Text style={styles.name}>{item.name}</Text>
                        </Pressable>
                    </Card>
                }
                data={data}
                ItemSeparatorComponent={listSeparator}
            />
        </View>

    )
}