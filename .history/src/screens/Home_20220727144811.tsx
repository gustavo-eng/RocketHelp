import { VStack, HStack, IconButton, useTheme, Text, Heading, FlatList, Center} from 'native-base';
//import React from 'react';

import { SignOut } from 'phosphor-react-native' ; 
import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { useState, useEffect } from 'react';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';
import { ChatTeardropText } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native'
import React from 'react';
import  firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import  auth  from '@react-native-firebase/auth';
import { dateFormat } from '../utils/firestoreDataFormat' ; 

// useState -> utilizado para refletir em tempo real na interface da aplicacao
/* 
IconButton -> coloca um icone e ja e um botao com icone
VStack -> alinha os itens verticalmente 
HStack -> Alinha os itens horizontalmente 
*/ 
export function Home() {
   
    const [loading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [statusSelected, setStatusSelected] = useState<'open'| 'closed'>('open');
    
    // estado que contem as solicitacoes  
    const [orders, setOrders] = useState <OrderProps[]>([
        { 
            id: '123',
            patrimony: '4567',
            when: '18/07/2022 - 14:00',
            status: 'open'
        }
 
    ]);

    /* 
      "handle" : acao que e executar na decorrencia de um clique
    */
    function handleNewOrder() {
         navigation.navigate('new');   
    } 
 
    function handleOpenDetails(orderId: string) {
        navigation.navigate('details', { orderId })
    }


    function handleLogout() {
        auth().signOut() // automaticamente desconecta o user do app 
        .catch(error => {
            console.log(error)

            return Alert.alert('Sair', 'Falhou')
        });
    }

    useEffect(() => { // quando passar de andamanto para finalizado, sera realizado essa estapa de busca no firestore 
        setIsLoading(true);
        
        const subscribe = firestore()
            .collection('orders')
            .where('status', '==', setStatusSelected) // filtro 
            .onSnapshot(snapshot => { // atualiza os dados em tempo real
                    const data = snapshot.docs.map(doc => {
                        const {patrimony, description, status, created_at} = doc.data();

                        return {
                            id: doc.id,
                            patrimony,
                            description,
                            status,
                            
                        }
                    })
            })  
    }, []);


  return (
    <VStack flex={1} pb={6} bg="gray.700" >
        <HStack
            w="full"
            justifyContent={"space-between"}
            alignItems="center"
            bg="gray.600"
            pt={12}
            pb={5}
            px={6}
        >
            <Logo />
            <IconButton icon={<SignOut size={26} color={colors.green[300]} />} onPress={handleLogout} /> 
        </HStack>
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                <Heading color={"gray.100"}>
                        Requerimentos 
                </Heading>
                <Text color="gray.200" fontSize={'md'}>
                    {orders.length}
                </Text>
            </HStack>

            <HStack space={4} mb={8}>    
                <Filter 
                    type="open"
                    title='em andamento'
                    onPress={() => setStatusSelected('open')}
                    isActive={statusSelected === 'open'}
                />
                <Filter  
                    type="closed"
                    title='finalizado'
                    onPress={() => setStatusSelected('closed')}
                    isActive={statusSelected === 'closed'}
                />
        </HStack>   

        <FlatList 
            data={orders}
            keyExtractor={ item => item.id }
            renderItem={({item}) => <Order data={item} onPress={() => handleOpenDetails(item.id)} /> }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom : 100}}
            ListEmptyComponent = {() => (
                <Center>
                        <ChatTeardropText color={colors.gray[300]} size={40}/>
                        <Text color={"gray.300"} fontSize="xl" textAlign={"center"}>
                            Voce ainda não possui {'\n'}
                            solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizados'}
                        </Text>
                </Center>
            )} 

        />
        <Button title='Nova solicitação'  onPress={handleNewOrder}/>

        </VStack>
    </VStack>
  );
}

/*
{statusSelected === 'open' ? 'em aberto' : 'finalizados'}

-> condicinal que retorna um "texto" de acordo com o statusSelected 


*/