import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from '../../../hooks/useAuth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

export const Field = () => {
    const { user } = useAuth();
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        if(!message) {
            return;
        }

        try {
            await addDoc(collection(db, 'messages'), {
                userId: user?.uid,
                timestamp: serverTimestamp(),
                text: message
            });
        } catch (error) {
            console.warn(error);
        } finally {
            setMessage('');
        }
    }

    return (
        <View style={tw('flex-row items-center justify-between')}>
            <TextInput
                placeholder='Enter your message'
                onChangeText={setMessage}
                value={message}
                showSoftInputOnFocus={false}
                autoCapitalize='none'
                style={tw('bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl')}
            />
            <TouchableOpacity onPress={handleSendMessage}>
                <MaterialCommunityIcons name='send-circle-outline' size={42} style={tw('text-blue-300')} />
            </TouchableOpacity>
        </View>
    )
}