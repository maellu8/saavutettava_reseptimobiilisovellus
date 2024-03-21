//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Etusivu from './src/Etusivu';
import Tiedot from './src/Tiedot';
// navigaatio

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Etusivu" component={Etusivu} />
        <Stack.Screen name="Tiedot" component={Tiedot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}