import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Loader } from '../../../ui/Loader';
import { Padding } from '../../../ui/Padding';
import { AccountItem } from './item/AccountItem';

import { useAccounts } from './useAccounts';

export const Accounts = () => {
    const { accounts, isLoading } = useAccounts();

    const ListEmptyComponent = <Text>You don't have cards</Text>;
    const line = <View style={{ borderBottomColor: '#E0E1E2', borderBottomWidth: 1, marginBottom: 24 }} />;
    
    return (
        <Padding>
            {isLoading ? <Loader /> : (
                <FlatList
                    ListEmptyComponent={ListEmptyComponent}
                    data={accounts}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item, index }) => (
                        <>
                            <AccountItem account={item} />
                            {index + 1 !== accounts.length && line}
                        </>
                    )}
                />
            )}
        </Padding>
    )
}