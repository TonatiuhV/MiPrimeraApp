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


        <TouchableOpacity onPress={ () => setContador(contador+1)}>
            <View style={styles.bottomIngremental}>
                 {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
                <Text>
                    +1
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
})