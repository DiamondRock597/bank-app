import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';
import tw from 'tailwind-rn';

import { IMessage } from './useMessages';

export const Message: React.FC<{ message: IMessage }> = ({ message }) => {
  const { user } = useAuth();

  const isMessageByAuthUser = user?.uid === message.userId;
  return (
    <View style={tw(`flex-row items-end rounded-lg my-2 py-2 px-3 ${isMessageByAuthUser ? 'bg-blue-500 self-end' : 'bg-gray-200 self-start'}`)}>
      <Text
        style={tw(`${isMessageByAuthUser ? 'text-white' : 'text-gray-800'}`)}>{message.text}</Text>
      <Text
        style={{
          ...tw(`${isMessageByAuthUser ? 'text-white' : 'text-gray-800'} opacity-70 ml-2`),
          fontSize: 10
        }}>{message.timestamp}</Text>
    </View>
  )
}