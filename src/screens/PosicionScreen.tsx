import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PosicionScreen = () => {
  return (
    <View style={styles.container}>
        {/* Posicion relativa al padre */}
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // width:300,
        // height:300,
        backgroundColor: '#28C4D9',
        justifyContent: 'center',// primero va la posicion del padre
        alignItems:'center'// primero la posicion del padre y despues el hijo
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor: '#5856D6',
        position:'relative',// posicion por defecto
        borderWidth: 10,
        borderColor:'white',
        // top:100,
        // left:50
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        // top: -50,
        bottom: 50
    }
});