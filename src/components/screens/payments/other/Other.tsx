import React from 'react';
import { View, FlatList } from 'react-native';
import tw from 'tailwind-rn';

import { SubHeading } from '../../../ui/SubHeading'
import { otherItems } from './data';
import { OtherItem } from './item/OtherItem';

export const Other = () => {
  return (
    <View>
      <SubHeading text='Imortant transfers' />
      <FlatList
        style={tw('py-5')}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={otherItems}
        renderItem={({ item }) => <OtherItem key={item.title} item={item} />}
      />
    </View>
  )
}