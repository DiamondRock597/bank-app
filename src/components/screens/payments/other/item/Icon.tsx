import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'tailwind-rn';

import { IFooterItem } from '../../../../layout/Footer/types';

export const Icon: React.FC<Pick<IFooterItem, 'iconName'>> = ({ iconName }) => {
    return (
        <View style={tw('rounded-full bg-blue-500 w-8 h-8 items-center justify-center')}>
            <AntDesign size={19} name={iconName} color='#EDF4FE' />
        </View>
    )
}