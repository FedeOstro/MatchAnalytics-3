import * as React from 'react';
import 'react-native-gesture-handler'

import {createNativeStackNavigator} from '@react-navigation/stack';
import homeScreen from '../MatchAnalytics-3/src/views/homeScreen';
import verEquipo from '../MatchAnalytics-3/src/views/verEquipo'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator  initialRouteName="Home">
        < Stack.Screen 
         name="Home"
         component={homeScreen}
        />
        <Stack.Screen 
          name="verEquipo" 
          component={verEquipo}
        />
      </Stack.Navigator>
  );
};

export default MyStack
