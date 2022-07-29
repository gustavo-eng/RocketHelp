import { VStack, Text, HStack, useTheme  } from "native-base";
//import React from "react";
import { Header } from "../components/Header";
import { useRoute } from "@react-navigation/native";
import React from "react";
import  { useEffect, useState } from 'react'
import { OrderProps } from "../components/Order";
import firestore from '@react-native-firebase/firestore'
import { OrderFirestoreDTO } from "../DTOs/OrderFirestoreDTO";
import { dateFormat } from "../utils/firestoreDateFormat";
import { Loading } from '../components/Loading';
import { CircleWavyCheck, Hourglass, HourglassHigh, HourglassLow } from 'phosphor-react-native';

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
            <Header title="Solicitacao" color={colors.green[300]} textDecorationColor="blue.700" />
            <HStack bg="gray.500" justifyContent={"center"} p={4}>
                {
                    order.status === 'closed' ?
                    <CircleWavyCheck size={22} color={colors.green[300]}/> 
                    : <HourglassLow size={22} color={colors.green[300]}/>

                }
            </HStack>
        </VStack>
    );
}

// parei em 01:45:44 

 



