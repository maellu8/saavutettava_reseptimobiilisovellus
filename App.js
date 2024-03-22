//import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Etusivu from './src/Etusivu';
import Tiedot from './src/Tiedot';
import Ruokaisa from './src/Ruokaisa';
import Leivonta from './src/Leivonta';
// navigaatio

//const HomeStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
/*
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Koti" component={Etusivu} options={{ headerShown: false }} />
      <Tab.Screen name="Ruokaisa" component={Ruokaisa} />
      <Tab.Screen name="Leivonta" component={Leivonta} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Etusivu" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Tiedot" component={Tiedot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} */

export default function StackNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Koti" options={{ headerShown: false }}>
            {() => (
              <Stack.Navigator>
               <Stack.Screen name="Etusivu" component={Etusivu} options={{ headerShown: false }} />
               <Stack.Screen name="Tiedot" component={Tiedot} />
             </Stack.Navigator>     
            )}
          </Tab.Screen>
          <Tab.Screen name="Ruokaisa" component={Ruokaisa} />
          <Tab.Screen name="Leivonta" component={Leivonta} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}