import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";

export type TypeCurrency = 'UAH' | 'USD';
export type TypeName = 'Black' | 'All';

export interface IAccount {
    _id: string;
    userId: string;
    balance: number;
    cardNumber: string;
    currency: TypeCurrency;
    name: TypeName;
}

export const useAccounts = () => {
    const { user } = useAuth();

    const [accounts, setAccounts] = useState<Array<IAccount>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => onSnapshot(query(collection(db, 'accounts'), where('userId', '==', user?.uid)), (snapshot) => {
        const accounts = snapshot.docs.map((doc) => ({
            _id: doc.id,
            ...doc.data()
        })) as Array<IAccount>;

        setAccounts(accounts);
        setIsLoading(false);
    }), []);

    return { accounts, isLoading };
}