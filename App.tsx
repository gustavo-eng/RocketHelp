//import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, StatusBar } from 'native-base' ;
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { SignIn } from './src/screens/SignIn' ;
import { Home } from './src/screens/Home';
import { THEME } from './src/styles/theme' ;

/*  
View = div
default css web 
*/ 
 
import { Loading } from './src/components/Loading';
import React from 'react';
import { Register } from './src/screens/Register';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  // verificacao da fonte antes de carregar a tela  de signIn 
  
  return (
    <NativeBaseProvider theme={THEME}>
        <StatusBar />   
        { fontsLoaded ? <Routes /> : <Loading/>  /* condicao ternaria  */ }
    </NativeBaseProvider>
   
  );
}






