import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

// Es mas eficiente que el useDimensionWindows pero este no cambia al rotar
// const {width, height} = Dimensions.get('window')



export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions()
  return (
    <View>
        <View style={styles.container}>
            <View style={{...styles.cajaModarada
                        ,width:width*0.50}}/>
                        {/* Tambien se puede hacer con eso operacion en lugar del porcentaje */}
            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={styles.title}>
            H: {height}, W: {width}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    // Pordefecto los view tiene 0
    container: {
        width:'100%',//El porcentaje es deacuerdo al padre
        height: 600,
        backgroundColor: 'red'
    },
    cajaModarada: {
        backgroundColor: '#5856D6',
        width:'50%',//El porcentaje es deacuerdo al padre
        height:'50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize:20,
        textAlign: 'center'
    }
})
