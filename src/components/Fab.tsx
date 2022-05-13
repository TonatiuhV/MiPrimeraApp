import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    title:String;
    position?: 'bl'| 'br'; // ? parametro opcional
    // Se recomienda que las propiedades vayan antes de los metodos
    onPress: () => void;
}
// valor por defecto
export const Fab = ({title, onPress ,position= 'br'}:Props) => {
  return (
    <TouchableOpacity onPress={ onPress }
        // Se pude realizar de esta manera
        // style={ (position=== 'br')?
        //     styles.absoluteBR:
        //     styles.absoluteBL
        // }
        // TAMBIEN ASI
        // style={styles[position=='br'?'absoluteBR':'absoluteBL']}
            style={[ styles.fabPosition,
                (position === 'br')?
                styles.right:
                styles.left
            ]}

        >
        <View style={styles.fab}>
                {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
            <Text style={styles.fabText}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    // OLD STYLES
    // absoluteBR: {
    //     position: 'absolute',
    //     bottom:25,
    //     right:25
    // },
    // absoluteBL: {
    //     position: 'absolute',
    //     bottom:25,
    //     left:25
    // },
    fabPosition: {
        position: 'absolute',
        bottom:25,
    },
    right: {
        right:25
    },
    left: {
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
