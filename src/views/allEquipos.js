import React from 'react';
import Header from '../components/Header';
import { View, Image, Dimensions, StyleSheet, ScrollView, StatusBar} from 'react-native-web';
const { width: screenWidth } = Dimensions.get('window');



const AllEquipo = ({navigation}) => {
    return(
        <View styles={styles.container}> 
        <Header/>
        <ScrollView>
          <View style={styles.bar}>
            <Image source={require('../images/BarraEquiposbarEquipo.png')} style={styles.barEquip}/>
          </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcc66',
        paddingTop: StatusBar.currentHeight,
      },
    barEquip: {
        flex: 1, 
        backgroundColor: 'lightblue',
        padding: 10,
        width: screenWidth,
        height: 33,
        margin: 10
      },
      bar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        width: screenWidth
      },
})


export default AllEquipo