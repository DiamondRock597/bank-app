import { collection, doc, getDoc, getDocs, limit, query, updateDoc, where } from "firebase/firestore";
import { Alert } from "react-native";

import { db } from "../../../firebase";
import { IAccount } from "../home/accounts/useAccounts";

export const handleTransfer = async (fromAccount: IAccount, cardNumber: string) => {
    Alert.prompt('Sum transfer', 'Enter the transfer amount:', async (sum) => {
        try {
            const querySnapshot = await getDocs(query(
                collection(db, 'accounts'),
                where('cardNumber', '==', cardNumber),
                limit(1)
            ));

            const accountToId = querySnapshot.docs.find(doc => doc.id)?.id;
            const docRefTo = doc(db, 'accounts', accountToId!);
            const docSnapTo = await getDoc(docRefTo);

            if(!docSnapTo.exists()) {
                return;
            }

            const currentToBalance = docSnapTo.data().balance;
            await updateDoc(docRefTo, {
                balance: currentToBalance + Number(sum)
            });

            const docRefFrom = doc(db, 'accounts', fromAccount._id);
            await updateDoc(docRefFrom, {
                balance: fromAccount.balance - Number(sum)
            })
            return;
        } catch (error) {
            Alert.alert('Error transfer', 'error');
        }
    });
}