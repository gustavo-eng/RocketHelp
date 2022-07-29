import { VStack, Text  } from "native-base";
//import React from "react";
import { Header } from "../components/Header";
import { useRoute } from "@react-navigation/native";
import React from "react";
import  { useEffect, useState } from 'react'

//useEffect -> utilizado para fazer a busca no banco firestore


type RouteParams = {
    orderId: string;
}

export function Details() {

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






