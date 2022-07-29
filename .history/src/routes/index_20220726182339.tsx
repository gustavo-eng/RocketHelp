import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn"; 
import React from "react";


export function Routes() {
    return (
        <NavigationContainer>
            <SignIn />
        </NavigationContainer>

    );
}

// se estiver loggado tem que acessar AppRoutes 




 






