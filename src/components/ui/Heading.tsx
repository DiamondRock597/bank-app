import React from 'react';
import { Text } from 'react-native';
import tw from 'tailwind-rn';
import { Padding } from './Padding';

export const Heading: React.FC<{ text: string, isCenter?: boolean }> = ({ text, isCenter = false }) => {
    const centerStyle = isCenter ? 'text-center' : '';
    return (
        <Padding>
            <Text style={tw(`text-2xl font-bold text-gray-800 ${centerStyle}`)}>{text}</Text>
        </Padding>
    );
}
