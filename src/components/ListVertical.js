import React from 'react';
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../Styles.js';

// Vertikaalinen lista, joka ottaa datan arvon kutsuvan näytön komponentista

export default function ListVertical({onPress, data}) {
    return(
        <View style={styles.view}>
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
            />
        </View>
    )
}