import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn"; 
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

//FirebaseAuthTypes -> tipagem
/*  
useEffect -> executado quando a interface e renderizada, aplicacao de logica assim que a interface e renderizada
useState -> armazena estados  
*/ 
export function Routes() {

    const [loading, setIsLoading] = useState(false);
    const [user, setUser] = useState<FirebaseAuthTypes.User>(); // tipagem de User 

    useEffect(() => {
        const subscribe = auth() // subscribe fica observando se o usuario esta autenticado ou nao
        .onAuthStateChanged(response => {
            setUser(response);
            setIsLoading(false)
        })
    },[])
    // tudo que vai em [ x ], e disparado a funcao do useEffect de acordo como o estado de "x" /
    //caso nao tiver nada [void], a funcao sera executada uma vez so 
    return (
        <NavigationContainer>
            <SignIn />
        </NavigationContainer>

    );
}

// se estiver loggado tem que acessar AppRoutes 






 






