import { addDoc, collection, doc, getDoc, getDocs, limit, query } from 'firebase/firestore';
import { Alert } from 'react-native';

import { db } from '../../../../firebase';

export const useFirestoreFeature = () => {
    const oneTimeRead = () => {
        Alert.prompt('Choose index of user', '', async (userIndex: string) => {
            const fullCollection = await getDocs(query(collection(db, 'users'), limit(1)));
            const docId = fullCollection.docs.find((_, index) => index == Number(userIndex))?.id;
            const firstDoc = await getDoc(doc(db, 'users', docId!));

            const firstUser = firstDoc.data();

            Alert.alert('You got this user from firestore', firstUser!.displayName);
        })
    }

    const addNewUser = () => {
        Alert.prompt('Username', 'Enter username', async (username: string) => {
            const newUser = await addDoc(collection(db, 'users'), {
                displayName: username
            });
            const firstDoc = await getDoc(doc(db, 'users', newUser.id));

            Alert.alert('You created new user', firstDoc.data()!.displayName);
        });
    }

    return {
        oneTimeRead,
        addNewUser
    }
}