import React from 'react'
// Gaantiza que se muestre el contenido adecuadamente en todos os dispositivos
import { SafeAreaView } from 'react-native';
import { Tarea2Screen } from './src/screens/Tarea2Screen';
// import { Tarea1Screen } from './src/screens/Tarea1Screen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PosicionScreen } from './src/screens/PosicionScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';


const App = () => {
  return (
    //Safe tambien puede tener stilos
    <SafeAreaView style={{ flex:1}}>
        {/* <HolaMundoScreen/> 
        <ContadorScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionesScreen/> */}
        {/* <PosicionScreen/> */}
        {/* <FlexScreen/> */}
        {/* <Tarea1Screen/> */}
        <Tarea2Screen/>
    </SafeAreaView>
    )
}
export default App;
