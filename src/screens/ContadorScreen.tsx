import React, { useState } from 'react'
import {  Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

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


       {/*  <TouchableOpacity onPress={ () => setContador(contador+1)}
            style={styles.absoluteBR}>
            <View style={styles.fab}>
                 {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
                {/* <Text style={styles.fabText}>
                    +1
                </Text>
            </View>
        </TouchableOpacity> 
     */}
        <Fab title='-1'/>
       
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