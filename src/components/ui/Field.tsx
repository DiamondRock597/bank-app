import React from 'react';
import { TextInput } from 'react-native';
import tw from 'tailwind-rn';

interface Props {
    value: string;
    placeholder: string;
    isSecure?: boolean;
    onChange: (value: string) => void;
}

export const Field: React.FC<Props> = ({ onChange, placeholder, value, isSecure }) => {
    return (
        <TextInput
            showSoftInputOnFocus={false}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isSecure}
            autoCapitalize='none'
            style={tw('rounded-xl bg-gray-100 mt-3 p-3 w-full')}
        />
    )
}