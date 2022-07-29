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
          setIsLoading(true) 

          console.log(email, password)

          auth()
             .signInWithEmailAndPassword(email, password)
             .catch((error) => {
               console.log(error.code);
               setIsLoading(false)
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

  
 
 

  
 









