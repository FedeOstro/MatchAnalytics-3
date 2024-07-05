import * as React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homeScreen from '../MatchAnalytics-3/src/views/homeScreen';
import verEquipo from '../MatchAnalytics-3/src/views/verEquipo'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen 
         name="Home"
         component={homeScreen}
        />
        <Stack.Screen 
          name="verEquipo" 
          component={verEquipo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
