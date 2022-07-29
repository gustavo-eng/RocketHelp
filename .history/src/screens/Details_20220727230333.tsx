import { VStack, Text  } from "native-base";
//import React from "react";
import { Header } from "../components/Header";
import { useRoute } from "@react-navigation/native";
import React from "react";
import  { useEffect, useState } from 'react'
import { OrderProps } from "../components/Order";

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

    const [order, setOrder] = useState<OrderDetails>({})

    const route = useRoute();
    const  { orderId } = route.params as RouteParams; // tipo RouteParams 

    return (

        <VStack flex={1} bg="gray.700">
            <Header title="Solicitacao"  />
            <Text color={"purple.600"} >
                {orderId}
            </Text>
        </VStack>
    );
}






