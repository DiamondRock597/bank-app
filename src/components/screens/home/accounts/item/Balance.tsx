import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

import { IAccount } from '../useAccounts';

export const Balance: React.FC<{ account: IAccount }> = ({ account }) => {
  const { balance, currency, name } = account;
  return (
    <View style={tw('w-8/12')}>
      <Text style={{ fontSize: 15 }}>{name}</Text>
      <Text style={{...tw('font-bold'), marginTop: 2, fontSize: 15}}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency'
        }).format(balance)}
      </Text>
    </View>
  )
}