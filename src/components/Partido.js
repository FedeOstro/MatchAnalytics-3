import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Partido = ({ numero, fecha, puntos, equipos }) => {
  return (
    <View style={styles.partidoContainer}>
      <View style={styles.iconContainer}>
        <Image source={require('../images/football.png')} style={styles.icon} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.partidoText}>Partido #{numero}</Text>
        <Text style={styles.fechaText}>Fecha: {fecha}</Text>
        <Text style={styles.puntosText}>Puntos: {puntos}</Text>
        <Text style={styles.equiposText}>{equipos}</Text>
      </View>
      <View>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../images/flechaderecha.png')} style={styles.image} />
      </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  partidoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  partidoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fechaText: {
    fontSize: 14,
  },
  puntosText: {
    fontSize: 14,
  },
  equiposText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2E98FA',
    padding: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  image:{
    width: 20,
    height: 20
  }
});

export default Partido;
