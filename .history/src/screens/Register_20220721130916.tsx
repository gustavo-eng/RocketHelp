
import { VStack, Text } from "native-base";
import React from "react";
import { Header } from "../components/Header";
import { Input } from "native-base";
import { Button } from "../components/Button";
 
// multline  permite quebrar linha e dar enter dentro do Input 
export function Register() {
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












