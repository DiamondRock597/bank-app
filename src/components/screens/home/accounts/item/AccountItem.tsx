import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

import { IAccount } from '../useAccounts';
import { Balance } from './Balance';
import { Currency } from './Currency';
import { ImageCard } from './ImageCard';

export const AccountItem: React.FC<{ account: IAccount }> = ({ account }) => {

    return (
        <View style={tw('flex-row items-center justify-between mb-7')}>
            <Currency currency={account && account.currency} />
            <Balance account={account} />
            <ImageCard account={account} />
        </View>
    )
}