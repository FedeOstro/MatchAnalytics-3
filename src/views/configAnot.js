import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';

const { width: screenWidth } = Dimensions.get('window');

const ConfigAnot = ({ navigation }) => {
  const [partido, setPartido] = useState('');
  const [duracion, setDuracion] = useState('');
  const [entretiempo, setEntretiempo] = useState('');
  const [tiempos, setTiempos] = useState('');

  const handleButtonPress = () => {
    if (partido !== '' && duracion !== '' && entretiempo !== '' && tiempos !== '' &&
        Number(duracion) >= 0 && Number(entretiempo) >= 0 && Number(tiempos) >= 0) {
      navigation.navigate('anotarPartido');
    } else {
      Alert.alert('Advertencia', 'Por favor, completa todos los campos correctamente antes de continuar. Asegúrate de que ningún campo tenga un valor menor a 0.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formWrapper}>
        <Text style={styles.title}>¡Configura Tu Partido!</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text>Partido:</Text>
            <Picker
              selectedValue={partido}
              onValueChange={setPartido}
              style={styles.picker}
            >
              <Picker.Item label="Selecciona equipo" value="" />
              <Picker.Item label="Partido 1" value="Partido 1" />
              <Picker.Item label="Partido 2" value="Partido 2" />
              <Picker.Item label="Partido 3" value="Partido 3" />
            </Picker>
          </View>
          <View style={styles.inputGroup}>
            <Text>Duración (minutos):</Text>
            <TextInput
              style={styles.input}
              value={duracion}
              onChangeText={setDuracion}
              placeholder="Duración"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Entretiempo (minutos):</Text>
            <TextInput
              style={styles.input}
              value={entretiempo}
              onChangeText={setEntretiempo}
              placeholder="Entretiempo"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Cantidad de tiempos:</Text>
            <TextInput
              style={styles.input}
              value={tiempos}
              onChangeText={setTiempos}
              placeholder="Cantidad de tiempos"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="EMPEZAR" onPress={handleButtonPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc66',
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: screenWidth * 0.8,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ConfigAnot;
