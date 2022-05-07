import React from 'react';
import { Alert } from 'react-native';
import tw from 'tailwind-rn';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Padding } from '../../../ui/Padding';
import { Button } from '../../../ui/Button';
import { asyncAlert } from './asyncAlert';
import { db } from '../../../../firebase';
import { useAuth } from '../../../../hooks/useAuth';
import { getRandomCardNumber } from '../../../../utils/getRandomCardNumber';

export const ApplyNewProducts: React.FC = () => {
    const { user } = useAuth();

    const registerHandler = async () => {
        try {
            const currency = await asyncAlert({
                title: 'Currency',
                msg: 'Select account currency',
                buttons: {
                    text: 'UAH',
                    resolveValue: 'UAH',
                    textSecond: 'USD',
                    resolveValueSecond: 'USD'
                }
            });

            const cardType = await asyncAlert({
                title: 'Card type',
                msg: 'Select card type',
                buttons: {
                    text: 'Black',
                    resolveValue: 'Black',
                    textSecond: 'All',
                    resolveValueSecond: 'All'
                }
            });

            await addDoc(collection(db, 'accounts'), {
                timestamp: serverTimestamp(),
                userId: user?.uid,
                balance: 0,
                cardNumber: getRandomCardNumber(),
                name: cardType ,
                currency
            });
        } catch (error: any) {
            Alert.alert('Error apply new product', error);
        }
    }

    return (
        <Padding style={tw('mt-6')}>
            <Button onPress={registerHandler} title='Apply for a new product' />
        </Padding>
    )
}