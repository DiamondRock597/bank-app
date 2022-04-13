import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

import { useProfile } from './useProfile';
import { Layout } from '../../layout/Layout';
import { Heading } from '../../ui/Heading';
import { Padding } from '../../ui/Padding';
import { Loader } from '../../ui/Loader';
import { Field } from '../../ui/Field';
import { Button } from '../../ui/Button';
import { useAuth } from '../../../hooks/useAuth';
import { useUpdateProfile } from './useUpdateProfile';

export const Profile = () => {
    const { logout } = useAuth();
    const { isLoading: isProfileLoading, name, setName, profile } = useProfile();

    const { isLoading, isSuccess, updateProfile } = useUpdateProfile(name, profile.docId);

    return (
        <Layout>
            <Heading text='Profile' isCenter />
            <Padding>
                {isSuccess && (
                    <View style={tw('bg-green-500 p-3 py-2 rounded-lg')}>
                        <Text style={tw('text-white text-center')}>
                            Profile updated successfully
                        </Text>
                    </View>
                )}
                {
                    isProfileLoading || isLoading ? <Loader /> : (
                        <>
                            <Field onChange={setName} value={name} placeholder='Enter name' />
                            <Button onPress={updateProfile} title='Update profile' />
                            <Button onPress={logout} title='Logout' colors={['bg-gray-200', '#D6D8DB']} />
                        </>
                    )
                }

            </Padding>
        </Layout>
    )
}