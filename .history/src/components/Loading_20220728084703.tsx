import {Center, Spinner} from 'native-base'
import React from 'react'

// center mantem tudo no centro
// Spinner -> efeito de loading 

//<Spinner color={"secondary.700"} />
// <Center flex={1} bg="gray.700">
export function Loading() {
    return (
        <Center flex={1} bg="black">
            <Spinner color={"secondary.200"} />
        </Center> 
    )
}

