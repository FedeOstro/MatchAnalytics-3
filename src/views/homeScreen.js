import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, Dimensions } from 'react-native';
import Equipo from '@/components/Equipo';
import Partido from '@/components/Partido';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width: screenWidth } = Dimensions.get('window');

function homeScreen ({navigation}) {
  return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <View style={styles.logContainer}>
            <Image source={require('../../assets/images/log.png')} style={styles.logo} />
          </View>
       </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.welcome}>Bienvenido Federico!!</Text>
          <View style={styles.bar}>
            <Image source={require('../../assets/images/barEquip.png')} style={styles.barEquip}/>
          </View>
          <View style={styles.equiposContainer}>
            <Equipo nombre="Equipo 1" press={() => navigation.navigate('verEquipo')}/>
            <Equipo nombre="Equipo 2" press={() => navigation.navigate('verEquipo')}/>
            <Equipo nombre="Equipo 3" press={() => navigation.navigate('verEquipo')}/>
          </View>
            <View style={styles.addButton}>
              <Button 
                title="Añadir Equipo"
              />
            </View>
            <View style={styles.vermas}>
                <Button 
                  title='Ver mas'
                  onPress={navigation.navigate('verEquipo')}
                />
            </View>
            <View style={styles.bar}>
              <Image source={require('../../assets/images/barPartidos.png')} style={styles.barEquip}/>
            </View>
          <View style={styles.partidosContainer}>
            <Partido numero="1" fecha="24/4" puntos="34-12" equipos="Equipo 3 vs As.Ingenieros" />
            <Partido numero="2" fecha="20/3" puntos="3-1" equipos="Equipo 1 vs Dep.Tortugas" />
            <Partido numero="3" fecha="12/2" puntos="92-80" equipos="Equipo 2 vs Dep.Puerrreydon" />
          </View>
          <View style={styles.addButton}>
            <Button 
              title="Anotar"
            />
          </View>
          <View style={styles.vermas}>
                <Button
                  title='Ver mas'
                />
            </View>
        </ScrollView>
      </View>
  );
}  



const styles = StyleSheet.create({
  vermas:{
    backgroundColor: '#FF002E',
    marginBottom: 10
  },
  barEquip: {
    flex: 1, 
    backgroundColor: 'lightblue',
    padding: 10,
  },
  bar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: screenWidth
  },
  container: {
    flex: 1,
    backgroundColor: '#ffcc66',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  logContainer: {
    borderWidth: 2,
    borderBottomColor: '#000',
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 60,
    height: 60,
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  equiposContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#2E98FA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
  partidosContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default homeScreen

