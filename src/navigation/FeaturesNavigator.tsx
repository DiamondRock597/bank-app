import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from './types';
import { FirestoreFeature } from '../components/screens/more/firestore/FirestoreFeature';
import { More } from '../components/screens/more/More';
import { StorageFeature } from '../components/screens/more/storage/StorageFeature';

const Stack = createNativeStackNavigator();

export const FeaturesNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.More} component={More} />
            <Stack.Screen name={Screens.Firestore} component={FirestoreFeature} />
            <Stack.Screen name={Screens.Storage} component={StorageFeature} />
        </Stack.Navigator>
    )
}

