import React from 'react';
import Carousel from 'react-native-new-snap-carousel';
import { Dimensions, Pressable, Image, Text } from 'react-native';
import styles from '../Styles.js';

// Horisontaalinen lista, joka ottaa datan arvon kutsuvan näytön komponentista

export default function ListHorizontal({onPress, data}) {

// karusellin kokomääritykset
  const { width:screenWidth } = Dimensions.get('window');
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.6;

// rendelöi karusellin sisällön, kuva ja teksti on painike
   const renderItem = ({item}) => (
    <Pressable style={styles.itemContainer}
      accessible={true}
      accessibilityRole="imagebutton"
      accessibilityLabel="Tap the button"
      accessibilityHint="Navigates to recipe's details"
      onPress={() => onPress(item)}
    >
      <Image source={{ uri: item.thumbnail_url}} style={{width:itemWidth, height:100, borderRadius: 8}} />
      <Text style={styles.name} accessibilityRole="text">{item.name}</Text>
    </Pressable>
   )

    return(
        <Carousel
            accessible={true}
            accessibilityLabel="Carousel"
            accessibilityHint="Scroll to the left to see recipies and back to the right"
            accessibilityRole="adjustable"
            showsHorizontalScrollIndicator={true}
            Layout='default'
            data={data}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    )
}