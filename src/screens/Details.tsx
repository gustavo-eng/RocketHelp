import { Alert } from 'react-native';
import { VStack, Text, HStack, useTheme, ScrollView, Icon, Box  } from "native-base";
//import React from "react";
import { Header } from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import  { useEffect, useState } from 'react'
import { OrderProps } from "../components/Order";
import firestore from '@react-native-firebase/firestore'
import { OrderFirestoreDTO } from "../DTOs/OrderFirestoreDTO";
import { dateFormat } from "../utils/firestoreDateFormat";
import { Loading } from '../components/Loading';
import { CircleWavyCheck, Hourglass, HourglassHigh, HourglassLow, DesktopTower, Clipboard, FileText, CircleWavyWarning } from 'phosphor-react-native';
import { CardDetails } from "../components/CardDetails";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { IconProps } from 'phosphor-react-native';
import { Input } from '../components/Input';
import {Button} from '../components/Button';
import { FunctionSetInputValue } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
//useEffect -> utilizado para fazer a busca no banco firestore
// useState -> buscar pelas informacoes assim que o componente for renderizado 

type RouteParams = {
    orderId: string;
}

type OrderDetails = OrderProps & {
    description: string;
    solution: string;
    closed: string;
}


export function Details() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [solution, setSolution] = useState(''); // estado para anotar a solution, caso o user informe!
    const [order, setOrder] = useState<OrderDetails>({} as OrderDetails); // vazio do tipo OrderDetails 
    const route = useRoute();
    const  { orderId } = route.params as RouteParams; // tipo RouteParams 
    const { colors } = useTheme(); 

    const navigation = useNavigation();

    function handleOrderClose() {
        if(!solution) {
            return Alert.alert('Solicitacao', 'Informe a solucao antes de encerrar')
        }

        firestore()
            .collection <OrderFirestoreDTO>('orders') // quer acesso a colecao orders
            .doc(orderId) // pega no doc
            .update({
                status: 'closed',
                solution,
                closed_at: firestore.FieldValue.serverTimestamp()
            }).then(() => {
                Alert.alert('Solicitacao', 'Solicitacao encerrada')
                navigation.goBack();
            }).catch((error) => {
                Alert.alert('Solicitacao', 'Error')
                console.log(error)
            })


    }

    useEffect(() => {
        firestore()
            .collection<OrderFirestoreDTO>('orders')
            .doc(orderId)
            .get()
            .then((doc)=> {
                const { patrimony, description, status, created_at, closed_at, solution} = doc.data();
                const closed = closed_at ? dateFormat(closed_at) : null; // se nao tem data de encerramento, entao = null 

                setOrder({
                    id: doc.id,
                    patrimony,
                    description,
                    status,
                    solution,
                    when: dateFormat(created_at),
                    closed
                });

                console.log({
                    id: doc.id,
                    patrimony,
                    description,
                    status,
                    solution,
                    when: dateFormat(created_at),
                    closed
                })

                setIsLoading(false)

            });
    }, []);

    if(isLoading) { 
        return <Loading /> 
    }

    return (
        
        
        <VStack flex={1} bg="gray.700" >
            <Box px={6} bg="gray.600" >
                <Header title="Solicitacao" />
            </Box>
            <HStack bg="gray.500" justifyContent={"center"} p={4}>
                {
                    order.status === 'closed' ?
                    <CircleWavyCheck size={22} color={colors.green[300]}/> 
                    : <HourglassLow size={22} color={colors.secondary[700]}/>

                }
                    
                <Text  
                    fontSize={"sm"}
                    color={order.status === 'closed' ? colors.green[300] : colors.secondary[700]}
                    ml={2}
                    textTransform="uppercase"
                >
                    {order.status === 'closed' ? 'finalizado' : 'em andamento'}
                </Text>
            </HStack>
            <ScrollView mx={5} showsVerticalScrollIndicator={false} mt={3} >
 
                <CardDetails
                    title="EQUIPAMENTO" 
                    description={`Patrimonio ${order.patrimony}.` }
                    icon={DesktopTower}
                    
                />

                <CardDetails
                    title="DESCRICAO DO PROBLEMA" 
                    description={`${order.description}.`}
                    icon={FileText}
                    footer={`Registrado em ${order.when}`}
                    
                />
                <CardDetails
                    title="SOLUCAO" 
                    icon={CircleWavyWarning}
                    description={order.solution}
                    footer={order.closed && `Encerrado em ${order.closed}`}
                    
                >
                    
                   { 
                        order.status === 'open' &&
                        <Input bg={"gray.500"} placeholder={'Descricao da solucao'} 
                            onChangeText={setSolution}
                            h={24}
                            textAlignVertical="top" // coloca o cursor no inicio 
                            multiline={true} // abilita quebra de linha     
                        />
                    }

                </CardDetails>

            </ScrollView>

            {
                order.status === 'open' && // se nao ta fechada, entao renderiza  o botao  
                <Button
                    title="Finalizar"
                    m={5}
                    onPress={handleOrderClose}
                />
            }

        </VStack>
    );
}

// parei em 02:04:11 

 



