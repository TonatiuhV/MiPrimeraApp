import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'


interface Props {
    title:String;
    position?: 'bl'| 'br'; // ? parametro opcional
    // Se recomienda que las propiedades vayan antes de los metodos
    onPress: () => void;
}
// valor por defecto
export const Fab = ({title, onPress ,position= 'br'}:Props) => {
  return (
    <View 
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
    ]}>
         <TouchableNativeFeedback onPress={ onPress }
             background={TouchableNativeFeedback.Ripple('gray', false, 25)}
            
            >
            <View style={styles.fab}>
                    {/* Recuerda que el texto debe estar conetenido en las etiquetas text */}
                <Text style={styles.fabText}>
                    {title}
                </Text>
            </View>
        </TouchableNativeFeedback>
    </View>   
   
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
        borderRadius:100,
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
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 2,
    },
    fabText: {
        color:'white',
        fontSize:25,
        alignSelf:'center'
    }
})
