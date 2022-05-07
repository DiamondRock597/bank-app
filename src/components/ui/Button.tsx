import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import tw from 'tailwind-rn';

interface Props {
    title: string;
    colors?: [string, string];
    onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, colors = ['bg-yellow-300', '#FBBF24'], title }) => {
    return (
        <TouchableHighlight style={tw(`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-3`)} onPress={onPress} underlayColor={colors[1]}>
            <Text style={tw('text-center')}>{title}</Text>
        </TouchableHighlight>
    );
}