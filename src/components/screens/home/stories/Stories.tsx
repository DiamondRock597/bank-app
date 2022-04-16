import React from 'react';
import { View, FlatList } from 'react-native';
import tw from 'tailwind-rn';

import { Loader } from '../../../ui/Loader';
import { StoryItem } from './StoryItem';
import { useStories } from './useStories';

export const Stories = () => {
    const { stories, isLoading } = useStories();

    return (
        <View style={tw('my-7')}>
            {isLoading ? <Loader /> : (
                <FlatList
                    horizontal
                    keyExtractor={(item) => item._id}
                    data={stories}
                    renderItem={({ item }) => <StoryItem story={item} />}
                />
            )}
        </View>
    )
}