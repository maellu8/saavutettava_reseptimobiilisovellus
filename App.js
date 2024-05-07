import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, title } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Etusivu from './src/Etusivu';
import Tiedot from './src/Tiedot';
import Ruokaisa from './src/Ruokaisa';
import Leivonta from './src/Leivonta';
import Haku from './src/Haku';

// NAVIGAATIO
// Yhdistetty Stack- ja Tab-navigaatio
// Accessible-ominaisuudet lisätty

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const activeTintLabelColor = '#a4d7af';
const inactiveTintLabelColor = '#808080';

export default function StackNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ activeTintColor: "#a4d7af",
          labelStyle: { fontSize: 15, fontWeight: "bold", }}}>
          <Tab.Screen name="Koti"
            options={{ headerShown: false, title: 'Home',
              tabBarIcon:({focused}) => ( <Entypo name="home" size={28} color={focused ? activeTintLabelColor : inactiveTintLabelColor} /> ) }}
            accessible={true}
            accessibilityLabel="Tap"
            accessibilityHint="Navigate to home page"
            accessibilityRole="button"
            >
            {() => (
              <Stack.Navigator>
               <Stack.Screen name="Etusivu"
                component={Etusivu}
                options={{
                  headerShown: true,
                  title: 'Recipe Book',
                  headerTitleAlign: 'center',
                  headerStyle: {backgroundColor: '#c8dace'},
                }}
                accessible={true}
                accessibilityLabel="This is header"
                accessibilityRole="header"
                />
               <Stack.Screen name="Tiedot" component={Tiedot}
                options={{ title: 'Recipe Details', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#c8dace'}  }}
                accessible={true}
                accessibilityRole="header"
                headerBackAccessibilityLabel="Go back"
                accessibilityHint="Navigates to home screen"
               />
              <Stack.Screen name="Haku" component={Haku}
                options={{ title: 'Recipe Search', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#c8dace'}  }}
                accessible={true}
                accessibilityRole="header"
                headerBackAccessibilityLabel="Go back"
                accessibilityHint="Navigates to home screen"
               />
             </Stack.Navigator>     
            )}
          </Tab.Screen>
          <Tab.Screen name="Ruokaisa" component={Ruokaisa}
            options={{ title: 'Cooking',
              tabBarIcon:({focused}) =>
              ( <MaterialCommunityIcons name="silverware-fork-knife" size={28} color={focused ? activeTintLabelColor : inactiveTintLabelColor} /> ), headerTitleAlign: 'center', headerStyle: {backgroundColor: '#c8dace'}  }}
            accessible={true}
            accessibilityLabel="Tap"
            accessibilityHint="Navigate to review Cooking reciepes"
            accessibilityRole="button"
            />
          <Tab.Screen name="Leivonta" component={Leivonta}
            options={{ title: 'Baking',
              tabBarIcon:({focused}) =>
              ( <MaterialCommunityIcons name="cupcake" size={28} color={focused ? activeTintLabelColor : inactiveTintLabelColor} /> ), headerTitleAlign: 'center', headerStyle: {backgroundColor: '#c8dace'}  }}
            accessible={true}
            accessibilityLabel="Tap"
            accessibilityHint="Navigate to review Baking reciepes"
            accessibilityRole="button"
            />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}