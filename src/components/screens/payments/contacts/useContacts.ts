import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";

export interface IContact {
    _id: string;
    displayName: string;
    cardNumber: string;
}

export const useContacts = () => {
    const { user } = useAuth();
    const [contacts, setContacts] = useState<Array<IContact>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => onSnapshot(query(collection(db, 'accounts'),
        where('userId', '!=', user?.uid)
    ), async (snapshot) => {
        const contactsFire = await Promise.all(snapshot.docs.map(async (doc) => {
            const data = doc.data() as IContact & { userId: string };

            const queryRequest = query(collection(db, 'users'), where('_id', '==', data.userId));
            const querySnapshot = await getDocs(queryRequest);

            const displayName = querySnapshot.docs.find((d) => d.data().displayName)?.data().displayName;

            return {
                ...data,
                _id: doc.id,
                displayName
            }
        }));

        const filteredContacts = contactsFire.filter(
            (contact, index, array) => array.findIndex(t => t.displayName === contact.displayName) === index
        ).filter((item) => item.displayName);

        setContacts(filteredContacts);
        setIsLoading(false);
    }), []);

    return { contacts, isLoading }
}