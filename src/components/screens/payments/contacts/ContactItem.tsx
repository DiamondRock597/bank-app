import React from 'react';
import { View, Text } from 'react-native';

import { IContact } from './Contacts'

export const ContactItem: React.FC<{ contact: IContact }> = ({ contact }) => {
    return (
        <View>
            <Text>{contact.displayName}</Text>
        </View>
    )
}