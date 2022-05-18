import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Tarea8Screen = () => {
  return (
    <View style = {styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaAzul}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cajaMorada: {

        alignContent:'space-around',
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        width: 100,
        height:100,
        left: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
})
