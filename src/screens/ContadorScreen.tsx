import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {contador}    
        </Text>
        {/* <Button
            title='Click'
            onPress={ () => setContador(contador+1)}
        /> SE RECOMENDA EL TOUCHOPACITY*/}


        <TouchableOpacity onPress={ () => setContador(contador+1)}
            style={styles.absoluteBR}>
            <View style={styles.fab}>
                 {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
                <Text style={styles.fabText}>
                    +1
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => setContador(contador-1)}
            style={styles.absoluteBL}>
            <View style={styles.fab}>
                 {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
                <Text style={styles.fabText}>
                    -1
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize:40,
        // position:'relative' POSICION POR DEFECTO
        top:-15
    },
    bottomIngremental:{
        backgroundColor: 'red',
        borderRadius: 100
    },
    
    absoluteBR: {
        position: 'absolute',
        bottom:25,
        right:25
    },
    absoluteBL: {
        position: 'absolute',
        bottom:25,
        left:25
    },
    fab: {
        backgroundColor: '#5856D6',
        width:50,
        height:50,
        borderRadius:50,
        justifyContent:'center'
    },
    fabText: {
        color:'white',
        fontSize:25,
        alignSelf:'center'
    }
})