import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    title:String
}

export const Fab = ({title}:Props) => {
  return (
    <TouchableOpacity onPress={ () => console.log('hola mundo')}
        style={styles.absoluteBL}>
        <View style={styles.fab}>
                {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
            <Text style={styles.fabText}>
                -1
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
