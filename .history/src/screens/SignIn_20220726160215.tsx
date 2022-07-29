import React from 'react';
import   {useState}  from 'react';
import { VStack , Heading, Icon, useTheme } from 'native-base' ; 
import { Envelope, Key  } from 'phosphor-react-native';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
//************************ */

// tudo e funcao e o componente retorna o que tem que ser renderizado  e nao pode retornar mais que dois
// elementos 

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button'; 

export  function SignIn() {

     const [isLoading, setIsLoading] = useState(false);
     /*
      Uma variavel comun nao gera uma nova renderizacao, 
      apenas variaveis de estado, utilizadas por meio do useState();
     */ 
     const [ email , setEmail ] = useState('');
     const [password, setPassword] = useState('');

     function handleSignIn() {
          // garantir email e senha
 
          if(!email || !password) {
               return Alert.alert('Entrar', 'Informe e-mail e senha.')
          }
          console.log(email, password)
          setIsLoading(false) // ALTERAR

          auth()
             .signInWithEmailAndPassword(email, password)
             .then(response => {
               console.log(response)
               
             })
             .catch((error) => {
               console.log(error);
               setIsLoading(false)
                    
               if(error.code === 'auth/invalid-email') {
                    return Alert.alert('Entrar', 'Email invalido');
               }

               if(error.code === 'auth/wrong-password') {
                    return Alert.alert('Entrar', ' senha invalida');
               }               

               if (error.code === 'auth/user-not-found') {
                    return Alert.alert('Entrar', 'User not found ');
               }
               
               return Alert.alert('Nao foi possivel acessar');
 

             });
     }

    const { colors }  = useTheme();
    return (     
       <VStack flex={1} alignItems="center" bg={"gray.600"} px={8} p={24}>
            <Logo />
            <Heading color={"gray.100"} fontSize={"xl"} mt={20} mb={6}>
                 Acesse sua Conta  
            </Heading>

            <Input placeholder="E-mail" 
             mb={5} InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4} />}
             onChangeText={setEmail}
             />
            <Input placeholder="Senha" 
             mb={8} InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
             secureTextEntry
             onChangeText={setPassword}
             />

             <Button title='Entrar' 
                    w='full' 
                    onPress={handleSignIn} 
                    isLoading={isLoading}
             />
              
               

       </ VStack >
    )   
} 

  
 
 

  
 









