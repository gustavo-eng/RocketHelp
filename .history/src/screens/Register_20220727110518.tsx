
import { VStack, Text } from "native-base";
import React from "react";
import { Header } from "../components/Header";
import { Input } from "native-base";
import { Button } from "../components/Button";
import { Alert } from "react-native";
import { useState } from "react";

import firestore from '@react-native-firebase/firestore';

// multline  permite quebrar linha e dar enter dentro do Input 
export function Register() {
    const [isLoading , setIsLoading] = useState(false);
    const [patrimony, setPatrimony] = useState('');
    const [description, setDescription] = useState('');

    function handleNewOrderRegister(){
        if(!patrimony || !description) {
            return Alert.alert('Registrar', 'Preencha todos os campos.');
        }

        setIsLoading(true);
    }


    return (
        <VStack flex={1} p={6} bg="gray.600" >
            <Header title="Nova solicitacao"/>

            <Input 
                placeholder="Numero do patrimonio"
                mt={4}
                borderColor="purple.900"
            />

            <Input
                borderColor="purple.900" 
                placeholder="Descricao do problema"
                flex={1}
                mt={5}
                multiline
                textAlignVertical="top"

            />

            <Button
                title="Cadastrar" 
                mt={5}
            />
        </VStack>
    )
}












