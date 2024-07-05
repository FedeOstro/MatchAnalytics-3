import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


const Equipo = ({ nombre, press }) => {
  return (
    <View style={styles.equipoContainer}>
      <Image source={require('../images/football.png')} style={styles.image} />
      <Text style={styles.nombre}>{nombre}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver más"
          onPress={press}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  equipoContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    width: 120, 
    marginLeft: 5,
    marginRight: 5
  },
  image: {
    width: 50,
    height: 50,
  },
  nombre: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Equipo;
