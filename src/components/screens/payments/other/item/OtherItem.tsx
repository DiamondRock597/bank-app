import React from 'react';
import { Text, Pressable } from 'react-native';
import tw from 'tailwind-rn';

import { BOX_SHADOW } from '../../../../../styles';
import { IOtherItem } from '../types';
import { Icon } from './Icon';

export const OtherItem: React.FC<{ item: IOtherItem }> = ({ item }) => {
    return (
        <Pressable
            // onPress={() => handleTransfer(accounts[0])}
            style={{
                ...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white'),
                ...BOX_SHADOW
            }}>
            <Icon iconName={item.iconName} />
            <Text style={{ ...tw('text-xs'), marginTop: 6 }}>{item.title}</Text>
        </Pressable>
    )
}