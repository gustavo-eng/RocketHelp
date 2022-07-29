import { VStack, HStack, Text, Box, useTheme, Circle, Pressable, IPressableProps } from 'native-base';
import React from 'react';
import { ClockAfternoon, Hourglass, CircleWavyCheck } from 'phosphor-react-native'


// Gustavo Alexandre Dias RA 2052229
// IPressableProps -> tipagem 

export type OrderProps = { // exporta para outros componentes a serem 
    // reutilizados na lista
    id: string;
    patrimony: string; 
    when: string;
    status: 'open' | 'closed';
}

type Props = IPressableProps & {
    data: OrderProps; 
}


export function Order({data, ...rest}: Props) {
    
    const { colors } = useTheme();

    const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300]
 
     
  return (
    <Pressable {...rest}>

        <HStack
            bg={"gray.600"}
            mb={4}
            alignItems = "center"
            justifyContent={"space-between"}
            rounded={"sm"}
            overflow="hidden"
            >
            <Box h="full" w={2} bg={statusColor} />

            <VStack flex={1} my={5} ml={5}>
                <Text color={"white"} fontSize="md"> 
                    Patrimonio { data.patrimony  }
                </Text>
                <HStack alignItems={"center"}>
                    <ClockAfternoon  size={15} color={colors.gray[100]} />
                <Text color={"yellow.600"} fontSize="xs" ml={1}>
                            {data.when}             
                    </Text>                

                </HStack>
            </VStack>

            <Circle bg={"gray.400"} h={12} mr={5}>
                {
                    data.status === 'closed' 
                    ? <CircleWavyCheck size={24} color={statusColor}/> 
                    : <Hourglass size={24} color={statusColor} />
                }
            </Circle>

        </HStack>

    </Pressable>

  );
}




