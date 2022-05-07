import React from 'react';
import { ImageBackground } from 'react-native';

import { Button } from '../../../ui/Button';
import { useStorage } from './useStorage';

export const StorageFeature = () => {
    const { image, getImage } = useStorage();
    return (
        <ImageBackground source={{ uri: image }} resizeMode='contain' style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button title='Upload Image' onPress={getImage} />
        </ImageBackground>
    )
}