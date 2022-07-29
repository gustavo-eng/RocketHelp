import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn"; 
import React, { useState } from "react";
import aurh, { FirebaseAuthTypes } from '@react-native-firebase/auth'


export function Routes() {

    const [loading, setIsLoading] = useState();
    return (
        <NavigationContainer>
            <SignIn />
        </NavigationContainer>

    );
}

// se estiver loggado tem que acessar AppRoutes 




 






