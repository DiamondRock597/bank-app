import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

export const Header: React.FC = () => {
    return (
        <View style={tw('flex-row items-center py-1 mb-2 mt-4')}>
            <View style={{ width: 40, height: 40, backgroundColor: 'blue', marginRight: 20 }} />
            <View>
                <Text style={tw('text-sm text-gray-800 font-medium')}>
                    Support
                </Text>
                <Text style={tw('text-ts text-gray-500')}>
                    We are there 24/7
                </Text>
            </View>
        </View>
    )
}