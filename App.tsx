import React from 'react'
// Gaantiza que se muestre el contenido adecuadamente en todos os dispositivos
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';


const App = () => {
  return (
    <SafeAreaView>
        {/* <HolaMundoScreen/> 
        <ContadorScreen/> */}
        <BoxObjectModelScreen/>
    </SafeAreaView>
    )
}
export default App;
