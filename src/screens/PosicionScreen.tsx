import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PosicionScreen = () => {
  return (
    <View style={styles.container}>
        {/* Posicion relativa al padre */}
        <View style={styles.cajaVerde}/>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        width:300,
        height:400,
        backgroundColor: '#28C4D9',
        //justifyContent: 'center',// primero va la posicion del padre
       // alignItems:'center'// primero la posicion del padre y despues el hijo
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor: '#5856D6',
        // position:'relative',// posicion por defecto
        position:'absolute',
        borderWidth: 10,
        borderColor:'white',
        // top:100,
        // left:50
        // bottom: 10
        top:10,
        right: 10
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        // top: -50,
        bottom: 10,
        right: 10
    },

    cajaVerde:{
        // width:100,
        // height:100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // top:0,
        // right: 0,
        // left: 0
        // Abrevacion de lo de arriba
        ...StyleSheet.absoluteFillObject
    }
});