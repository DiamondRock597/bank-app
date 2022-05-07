import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { MaterialIcons } from '@expo/vector-icons';

import { IService } from './data'
import { Percent } from './Percent';
import { getRandomGradient } from './getRandomGradient';

export const ServiceItem: React.FC<{ service: IService }> = ({ service }) => {
    return (
        <View style={tw('mb-4')}>
            <View style={tw('rounded-xl overflow-hidden w-14 h-14 mx-4')}>
                <LinearGradient colors={getRandomGradient()} style={tw('w-full h-full items-center justify-center')}>
                    <MaterialIcons name={service.iconName} size={30} color='#fff' />
                    <Percent percent={service.percent} />
                </LinearGradient>
            </View>
            <Text style={{ ...tw('text-xs text-center'), marginTop: 6 }}>{service.title}</Text>
        </View>
    )
}

