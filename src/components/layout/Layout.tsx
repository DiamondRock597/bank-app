import React from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

interface Props {
    isScrollView?: boolean;
}

export const styleCenter = tw('h-full w-full bg-white pt-16');

export const Layout: React.FC<Props> = ({ children, isScrollView }) => {
    return (
        <View style={styleCenter}>
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
    );
}