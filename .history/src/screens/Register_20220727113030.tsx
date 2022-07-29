
import { VStack, Text } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";
import { Input } from "native-base";
import { Button } from "../components/Button";
import { Alert } from "react-native";
import { useState } from "react";

import firestore from '@react-native-firebase/firestore';
import { ClosedCaptioning } from "phosphor-react-native";

// multline  permite quebrar linha e dar enter dentro do Input 
export function Register() {
    const [isLoading , setIsLoading] = useState(false);
    const [patrimony, setPatrimony] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation(); 


    function handleNewOrderRegister(){
        if(!patrimony || !description) {
            return Alert.alert('Registrar', 'Preencha todos os campos.');
        }

        setIsLoading(true);

        firestore()
            .collection('orders') // o proprio firebase ira criar essa colecao caso nao houver
            .add({
                patrimony,
                description,
                status: 'open',
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Solicitacao", "Solicitacao registrada com sucesso. ");
                navigation.goBack(); // volta para tela inicial
            }).catch((error) => {
                console.log(error);
                setIsLoading(false);

                return Alert.alert('Solicitacao', 'Nao foi possivel registrar o pedido'); 

            } ); 


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
                title="Cadastrallllllllll" 
                mt={5}
                onPress={handleNewOrderRegister}
            />
        </VStack>
    )
}












