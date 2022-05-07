import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import tw from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';

import { IFooterItem } from './types';
import { RootStackParamList } from '../../../navigation/types';

interface Props {
    item: IFooterItem;
    currentRoute: string;
    navigate: (screenName: keyof RootStackParamList) => void;
}

export const NavItem: React.FC<Props> = ({ item, navigate, currentRoute }) => {
    const activeStyles = currentRoute === item.title ? 'text-blue-500' : 'text-gray-500';
    const onPress = useCallback(() => navigate(item.title), []);

    return (
        <Pressable style={{ ...tw('items-center'), width: '20%' }} onPress={onPress}>
            <AntDesign name={item.iconName} style={tw(`text-xl ${activeStyles}`)} />
            <Text style={{
                ...tw(`text-xs ${activeStyles}`),
                marginTop: 1
            }}>{item.title}</Text>
        </Pressable>
    )
}