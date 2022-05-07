import React from 'react';
import tw from 'tailwind-rn';
// @ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';

import { useData } from '../../../../hooks/useData';

export const StoryContainer = () => {
    const { activeStories, setActiveStories } = useData();
    return (
        <SC
            visible={activeStories}
            enableProgress
            images={activeStories}
            duration={20}
            onComplete={() => setActiveStories(null) }
            containerStyle={tw('w-full h-full')}
        />
    )
}