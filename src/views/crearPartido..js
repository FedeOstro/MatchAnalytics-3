import react from "react"
import {View, StyleSheet} from "react-native"
import Header from "../components/Header"

const CrearPartido = () => {
    return(
        <View style={style.container}>
            <Header/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcc66',
    }
})

export default CrearPartido