import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';


export const Percent: React.FC<{ percent: number }> = ({ percent }) => {
    return (
        <View
            style={{
                ...tw('w-0 h-0 bg-transparent absolute top-0 right-0 justify-center items-center'),
                borderStyle: 'solid',
                borderRightWidth: 27,
                borderTopWidth: 27,
                borderRightColor: 'transparent',
                borderTopColor: '#AAEF00',
                transform: [{ rotate: '90deg' }]
            }}
        >
            <Text style={{
                ...tw('w-10 h-10 absolute'),
                fontSize: 10,
                transform: [{ rotate: '-40deg' }],
                top: -34,
                left: 7
            }}>{percent}%</Text>
        </View>
    )
}