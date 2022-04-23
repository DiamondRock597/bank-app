import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-rn'
import { Avatar } from '../../../ui/Avatar';

import { IContact } from './useContacts'

export const ContactItem: React.FC<{ contact: IContact }> = ({ contact }) => {
    return (
        <Pressable style={tw('ml-4 mr-1 items-center')}>
            <Avatar size='large' name={contact.displayName} />
            <Text style={tw('mt-1 text-xs')}>{contact.displayName}</Text>
        </Pressable>
    )
}