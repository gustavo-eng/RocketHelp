import {Center, Spinner} from 'native-base'
import React from 'react'

// center mantem tudo no centro
// Spinner -> efeito de loading 



export function Loading() {
    return (
        <Center flex={1} bg="gray.700">
            <Spinner color={"secondary.700"} />
        </Center> 
    )
}

