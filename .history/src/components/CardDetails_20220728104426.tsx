import { VStack, HStack, Text, useTheme, Box } from 'native-base';
import { ReactNode } from 'react';
import { IconProps } from 'phosphor-react-native';
import { SystraceStatic } from 'react-native';

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
    <VStack bg={"gray.600"} p={5} rounded="sm">
        <HStack alignItems={"center"} mb={4}>
            <Icon color={colors.primary[700]} />
            <Text ml={2} color="gray.300" fontSize={"sm"} textDecoration="uppercase">
                Ola 
            </Text>
        </HStack>
    </VStack>
  );
}