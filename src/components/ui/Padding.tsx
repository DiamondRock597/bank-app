import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import tw from 'tailwind-rn';

interface Props {
    style?: ViewStyle;
}

export const Padding: React.FC<Props> = ({ children, style = {} }) => {
    return (
        <View style={[tw('px-4'), style]}>
            {children}
        </View>
    )
}
