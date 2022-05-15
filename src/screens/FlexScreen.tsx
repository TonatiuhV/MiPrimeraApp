import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>
            Caja 1
        </Text>
        <Text style={styles.caja2}>
            Caja 2
        </Text>
        <Text style={styles.caja3}>
            Caja 3
        </Text>
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28C4D9',
    },
    caja1: {
        flex:1, // Tomaña el tamaño maximo disponibe en caso de no tener flex los demas componentes hermanos
        borderWidth: 2,
        borderColor:'white',
        fontSize:30
    },
    caja2: {
        flex: 1,// En caso de tener se suman los flex y se toma su valor como porentaje
        borderWidth: 2,
        borderColor:'white',
        fontSize:30
    },
    caja3: {
        flex:4,
        borderWidth: 2,
        borderColor:'white',
        fontSize:30
    }

})
