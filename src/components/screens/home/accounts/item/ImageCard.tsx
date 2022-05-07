import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import tw from 'tailwind-rn';

import { IAccount } from '../useAccounts';

export const ImageCard: React.FC<{ account: IAccount }> = ({ account }) => {
  const { name, cardNumber } = account;
  const backgroundColor = name === 'All' ? 'gray' : 'blue';


  return (
    <View
      style={{ ...tw('justify-end w-14 h-10'), padding: 4.5, backgroundColor }}
    >
      <Text style={{ ...tw('text-white font-medium'), fontSize: 11 }}>{cardNumber.slice(-4)}</Text>
    </View>
  )
}
