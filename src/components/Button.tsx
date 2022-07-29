import React from 'react';
import { Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base' ; 
import { color } from 'native-base/lib/typescript/theme/styled-system';
// Heading para poder escrever dentro do componente Button

type Props = IButtonProps & {
    title?: string ;
}

export function Button({title,  ...rest } : Props) {
  return (
    <ButtonNativeBase 
     bg={'green.700'}
     h={14}
     fontSize = {"sm"}
     rounded = "md"
     _pressed={{bg: "green.400", color:"gray.100"} }
     {...rest }
    >
        <Heading color="white" fontSize="sm">  
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}