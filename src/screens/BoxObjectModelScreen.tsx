import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Box Model Object
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  // Tiene el SafeAreaView
  container: {
    flex:1,
    backgroundColor:'red'
  },
  title:{
    fontSize:20,
    paddingHorizontal:100,
    // paddingVertical:10,
    paddingTop:10,
    // width:150,
    borderWidth:10,
    // backgroundColor: 'red'
  }
})
