import React from 'react'
// Gaantiza que se muestre el contenido adecuadamente en todos os dispositivos
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';


const App = () => {
  return (
    //Safe tambien puede tener stilos
    <SafeAreaView style={{ flex:1}}>
        {/* <HolaMundoScreen/> 
        <ContadorScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        <DimensionesScreen/>
    </SafeAreaView>
    )
}
export default App;
