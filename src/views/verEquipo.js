import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import PlayerItem from '../components/Jugadores';
import Partido from '../components/Partido';

const TeamScreen = ({ navigation }) => {
    const players = [
        { id: '1', name: 'Juan Gutierrez', number: 1, value: 41, image: 'https://via.placeholder.com/50' },
        { id: '2', name: 'Dante Verdi', number: 2, value: 25, image: 'https://via.placeholder.com/50' },
        { id: '3', name: 'Julian Huewman', number: 3, value: 30, image: 'https://via.placeholder.com/50' },
    ];
    // {matches.map(match => (
    //     <TouchableOpacity key={match.id} style={styles.matchItem}>
    //       <Text>{match.opponent}</Text>
    //       <Text>Fecha: {match.date}</Text>
    //       <Text>Puntos: {match.score}</Text>
    //       <Text>Val: {match.value}</Text>
    //     </TouchableOpacity>
    //   ))}
  return (
    <View style={styles.container}>
      
      <View style={styles.partidosContainer}>
        <Partido numero="1" fecha="24/4" puntos="34-12" equipos="Equipo 3 vs As.Ingenieros" />
        <Partido numero="2" fecha="20/3" puntos="3-1" equipos="Equipo 1 vs Dep.Tortugas" />
        <Partido numero="3" fecha="12/2" puntos="92-80" equipos="Equipo 2 vs Dep.Puerrreydon" />
      </View> 
      <Text style={styles.sectionTitle}>Jugadores</Text>
      <FlatList
        data={players}
        renderItem={({ item }) => <PlayerItem player={item} />}
        keyExtractor={item => item.id}
        style={styles.playerList}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Añadir Nuevo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C04E',
    padding: 10,
  },
  matchItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  playerList: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',   
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  partidosContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default TeamScreen;
