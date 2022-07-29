import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn"; 
import aurh, { FirebaseAuthTypes } from '@react-native-firebase/auth'

//FirebaseAuthTypes -> tipagem
/*  
useEffect -> executado quando a interface e renderizada, aplicacao de logica assim que a interface e renderizada
useState -> armazena estados  
*/ 
export function Routes() {

    const [loading, setIsLoading] = useState();
    const [user, setUser] = useState<FirebaseAuthTypes.User>(); // tipagem de User 

    useEffect(() => {

    },[])

    return (
        <NavigationContainer>
            <SignIn />
        </NavigationContainer>

    );
}




// se estiver loggado tem que acessar AppRoutes 




 






