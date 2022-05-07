import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { FontAwesome } from '@expo/vector-icons';

import { TypeCurrency } from '../useAccounts';

export const Currency: React.FC<{ currency: TypeCurrency }> = ({ currency }) => {
    const iconName = currency === 'USD' ? 'usd' : 'ruble';
    return (
        <View style={tw('rounded-full bg-blue-500 w-9 h-9 items-center justify-center')}>
            <View
                style={{ ...tw('w-5 h-5 rounded-full items-center justify-center'), backgroundColor: '#EDF4FE' }}
            >
                <FontAwesome color='#488CF9' size={13} name={iconName} />
            </View>
        </View>
    )
}