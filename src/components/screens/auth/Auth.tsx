import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-rn';

import { useAuth } from '../../../hooks/useAuth';
import { styleCenter } from '../../layout/Layout';
import { Button } from '../../ui/Button';
import { Field } from '../../ui/Field';
import { Loader } from '../../ui/Loader';

export const Auth = () => {
    const { isLoading, login, register } = useAuth();
    const { navigate } = useNavigation();
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onAuthConfirm = useCallback(async () => {
        if (isRegister) {
            await register(email, password);
        } else {
            await login(email, password);
        }

        setEmail('');
        setPassword('');
    }, [email, password, isRegister]);

    const onChangeTypeOfPage = () => setIsRegister(!isRegister);

    return (
        <View style={styleCenter}>
            <View style={tw('mx-5 justify-center items-center h-full')}>
                <View style={tw('w-9/12')}>
                    <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
                        {isRegister ? 'Sign up' : 'Sign in'}
                    </Text>
                    {isLoading ? <Loader /> : (
                        <>
                            <Field value={email} onChange={setEmail} placeholder='Enter email' />
                            <Field value={password} onChange={setPassword} placeholder='Enter password' isSecure />
                            <Button title='Lets go' onPress={onAuthConfirm} />
                            <Pressable onPress={onChangeTypeOfPage}>
                                <Text style={tw('text-gray-800 opacity-30 text-right text-sm')}>
                                    {isRegister ? 'Login' : 'Register'}
                                </Text>
                            </Pressable>
                        </>
                    )}
                </View>
                <Button title='Test Firebase features' onPress={() => navigate('More')}/>
            </View>
        </View>
    )
}