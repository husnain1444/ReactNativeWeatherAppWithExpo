import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import { defaultColors } from './utils/defaultColors';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: defaultColors.appTheme,
          },
          headerTitleStyle: { color: defaultColors.btnTextCOlor },
          headerTintColor: 'white'
        }}
        >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Weather' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detail' }}
        />

        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}