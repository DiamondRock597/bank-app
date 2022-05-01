import { User } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot, query, updateDoc, writeBatch } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { db } from '../../../../firebase';

export const useFirestoreFeature = () => {
    const [users, setUsers] = useState<Array<User>>([]);

    useEffect(() => onSnapshot(query(collection(db, 'users')), (snapshot) => {
        const newUsers = snapshot.docs.map((doc) => ({
            _id: doc.id,
            ...doc.data()
        }));
        setUsers(newUsers);
    }), []);

    const oneTimeRead = () => {
        Alert.prompt('Choose index of user', '', async (userIndex: string) => {
            const fullCollection = await getDocs(query(collection(db, 'users')));
            const docId = fullCollection.docs.find((_, index) => index == Number(userIndex))?.id;
            const firstDoc = await getDoc(doc(db, 'users', docId!));

            const firstUser = firstDoc.data();

            Alert.alert('You got this user from firestore', firstUser!.displayName);
        })
    }

    const addNewUser = () => {
        Alert.prompt('Username', 'Enter username', async (username: string) => {
            const newUser = await addDoc(collection(db, 'users'), {
                displayName: username,
                _id: Math.floor(Math.random() * 1000),
            });
            const firstDoc = await getDoc(doc(db, 'users', newUser.id));

            Alert.alert('You created new user', firstDoc.data()!.displayName);
        });
    }

    const updateUser = () => {
        //there should be transaction from firestore
        Alert.prompt('Update username of first user', 'Enter display name', async (username: string) => {
            const fullCollection = await getDocs(query(collection(db, 'users')));
            const docId = fullCollection.docs.find((doc) => doc.id)?.id;

            const updatedDoc = doc(db, 'users', docId!);

            await updateDoc(updatedDoc, {
                displayName: username
            });
        });
    }

    const deleteUser = async () => {
        const fullCollection = await getDocs(query(collection(db, 'users'), limit(1)));
        const docId = fullCollection.docs.find((doc) => doc.id)?.id;

        const deletedDoc = doc(db, 'users', docId!);

        await deleteDoc(deletedDoc);
    }

    const batchDeleteAllUsers = async () => {
        const fullCollection = await getDocs(query(collection(db, 'users')));

        const batch = writeBatch(db);

        fullCollection.forEach((doc) => batch.delete(doc.ref));
        return batch.commit();
    }

    return {
        updateUser,
        oneTimeRead,
        addNewUser,
        deleteUser,
        users,
        batchDeleteAllUsers
    }
}