//import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Etusivu from './src/Etusivu';
import Tiedot from './src/Tiedot';
import Ruokaisa from './src/Ruokaisa';
import Leivonta from './src/Leivonta';
// navigaatio

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function StackNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Koti" options={{ headerShown: false, tabBarIcon:() => ( <Entypo name="home" size={35}/> ) }}>
            {() => (
              <Stack.Navigator>
               <Stack.Screen name="Etusivu"
                component={Etusivu}
                options={{ headerShown: false }}
                />
               <Stack.Screen name="Tiedot" component={Tiedot} />
             </Stack.Navigator>     
            )}
          </Tab.Screen>
          <Tab.Screen name="Ruokaisa" component={Ruokaisa} options={{ tabBarIcon:() => ( <MaterialCommunityIcons name="silverware-fork-knife" size={35} /> ) }} />
          <Tab.Screen name="Leivonta" component={Leivonta} options={{ tabBarIcon:() => ( <MaterialCommunityIcons name="cupcake" size={38} /> ) }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}