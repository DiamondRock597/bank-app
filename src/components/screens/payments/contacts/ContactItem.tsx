import React from 'react';
import { Text, Pressable } from 'react-native';
import tw from 'tailwind-rn'

import { Avatar } from '../../../ui/Avatar';
import { useAccounts } from '../../home/accounts/useAccounts';
import { handleTransfer } from '../handleTransfer';

import { IContact } from './useContacts'

export const ContactItem: React.FC<{ contact: IContact }> = ({ contact }) => {
    const { accounts } = useAccounts();
    return (
        <Pressable onPress={() => handleTransfer(accounts[0], contact.cardNumber)} style={tw('ml-4 mr-1 items-center')}>
            <Avatar size='large' name={contact.displayName} />
            <Text style={tw('mt-1 text-xs')}>{contact.displayName}</Text>
        </Pressable>
    )
}