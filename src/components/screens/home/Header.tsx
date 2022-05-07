import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';

import { Avatar } from '../../ui/Avatar';
import { Padding } from '../../ui/Padding';
import { useProfile } from '../profile/useProfile';
import { Loader } from '../../ui/Loader';
import { useAuth } from '../../../hooks/useAuth';

export const Header: React.FC = () => {
    const { isLoading, name } = useProfile();
    const { navigate } = useNavigation();

    const onPress = () => navigate('Profile');

    return isLoading ? <Loader /> : (
        <Padding style={tw('flex-row items-center')}>
            <Avatar name={name} />
            <TouchableOpacity style={tw('flex-row items-end')} onPress={onPress}>
                <Text style={tw('text-2xl text-gray-800 font-bold')}>{name}</Text>
                <Entypo
                    name='chevron-small-right'
                    size={28}
                    style={tw('text-gray-800')}
                />
            </TouchableOpacity>
        </Padding>
    )
}
