import * as React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homeScreen from '../MatchAnalytics-3/src/views/homeScreen';
import verEquipo from '../MatchAnalytics-3/src/views/verEquipo'
import allEquipos from '../MatchAnalytics-3/src/views/allEquipos'

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
        <Stack.Screen
          name="allEquipo"
          component={allEquipos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
// {matches.map(match => (
    //     <TouchableOpacity key={match.id} style={styles.matchItem}>
    //       <Text>{match.opponent}</Text>
    //       <Text>Fecha: {match.date}</Text>
    //       <Text>Puntos: {match.score}</Text>
    //       <Text>Val: {match.value}</Text>
    //     </TouchableOpacity>
    //   ))}