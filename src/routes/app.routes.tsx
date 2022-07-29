import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Register } from "../screens/Register";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react";

const {Navigator, Screen} = createNativeStackNavigator(); 
/* 
Pro Navigator passa as configuracoes das rotas 
e dentro do navigate vai as screens 

*/

// quando chamar pela interface de new, chamar component Register 

export function AppRoutes() {
    return ( 
       <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home} />
            <Screen name="new" component={Register} />
            <Screen name="details" component={Details} />
       </Navigator>
    )
}
// parei em 1:00:00 




