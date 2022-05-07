import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'tailwind-rn';
import { Loader } from '../../../ui/Loader';

import { SubHeading } from '../../../ui/SubHeading';
import { ContactItem } from './ContactItem';
import { useContacts } from './useContacts';

export const Contacts = () => {
    const { contacts, isLoading } = useContacts();

    return (
        <View style={tw('my-8')}>
            <SubHeading text='Phone transfers' />
            {isLoading ? <Loader /> : (
                <FlatList
                    style={tw('mt-5')}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={contacts}
                    renderItem={({ item }) => <ContactItem key={item._id} contact={item} />}
                />
            )}
        </View>
    )
}