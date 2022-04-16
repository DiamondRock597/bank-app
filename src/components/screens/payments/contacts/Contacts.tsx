import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

import { useContacts } from './useContacts';

export interface IContact {
    _id: string;
    displayName: string;
    cardNumber: string;
}

export const Contacts = () => {
    const { contacts, isLoading } = useContacts();

    return (
        <View style={tw('my-8')}>
            <Text>Contacts</Text>
        </View>
    )
}