//Data transfer object 

import  { FirebaseFirestoreTypes} from '@react-native-firebase/firestore'; 

export type OrderFirestoreDTO = {
    patrimony: string;
    description: string;
    status: 'open' | 'closed';
    solution?: string;
    created_at: FirebaseFirestoreTypes.Timestamp;
    closed_at?: FirebaseFirestoreTypes.Timestamp; // se  esta, nao tem data de encerramento !! 
}

