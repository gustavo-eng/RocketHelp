import { VStack, HStack, Text, useTheme, Box } from 'native-base';
import { ReactNode } from 'react';
import { IconProps } from 'phosphor-react-native';
import { color } from 'native-base/lib/typescript/theme/styled-system';


type Props = {
    title: string;
    description?: string;
    footer?: string;
    icon: React.ElementType<IconProps>;
    children?: ReactNode;
}


export function CardDetails({ 
    title,
    description,
    footer = null,
    icon: Icon,
    children
 }: Props) {

  const { colors } = useTheme();

  return (
    <VStack bg={"gray.400"} p={5} rounded="sm">
        <HStack alignItems={"center"} mb={4}>
            <Icon color={colors.primary[700]} />
            <Text ml={2} color="gray.200" fontSize={"sm"} textDecoration="uppercase" fontWeight={'medium'}>
                {title}
            </Text>
        </HStack>
        {
            !!description && // !!description transforma em um valor booleano 
            <Text color={colors.secondary[700]} fontWeight={'hairline'}>
                {description}
            </Text>
        }

        { children }
        {  
            !!footer && 
            <Box borderTopColor={"gray.400"}  borderTopWidth={1} mt={3}>
                <Text>
                    {footer}
                </Text>
            </Box>
        }

    </VStack>
  );
}