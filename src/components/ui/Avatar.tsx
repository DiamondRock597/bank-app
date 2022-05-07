import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

interface Props {
    name?: string | null;
    size?: 'small' | 'large'
}

export const Avatar: React.FC<Props> = ({ name, size = 'small' }) => {
    const isSmall = size === 'small';
    const containerStyle = isSmall ? 'w-9 h-9 mr-3' : 'w-12 h-12';
    const textStyle = isSmall ? 'text-lg' : 'text-xl';

    return (
        <View style={tw(`rounded-full bg-gray-300 ${containerStyle} items-center justify-center`)}>
            <Text style={tw(`text-white ${textStyle} font-medium`)}>{name?.slice(0, 1)}</Text>
        </View>
    )
}