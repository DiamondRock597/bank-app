import React from 'react';
import { Text } from 'react-native';
import tw from 'tailwind-rn';
import { Padding } from './Padding';

interface Props {
    text: string;
}

export const SubHeading: React.FC<Props> = ({ text}) => {
    return (
        <Padding>
            <Text style={tw(`text-xl font-bold text-gray-800`)}>{text}</Text>
        </Padding>
    );
}
