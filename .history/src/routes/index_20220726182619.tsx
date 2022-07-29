import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn"; 
import aurh, { FirebaseAuthTypes } from '@react-native-firebase/auth'

//FirebaseAuthTypes -> tipagem
export function Routes() {

    const [loading, setIsLoading] = useState();
    const [user, setUser] = useState();

    return (
        <NavigationContainer>
            <SignIn />
        </NavigationContainer>

    );
}

// se estiver loggado tem que acessar AppRoutes 




 






