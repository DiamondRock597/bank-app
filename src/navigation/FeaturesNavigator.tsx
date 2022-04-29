import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from './types';
import { FirestoreFeature } from '../components/screens/more/firestore/FirestoreFeature';
import { More } from '../components/screens/more/More';
import { CloudFunctions } from '../components/screens/more/cloud_functions/CloudFunctions';

const Stack = createNativeStackNavigator();

export const FeaturesNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.More} component={More} />
            <Stack.Screen name={Screens.FirestoreFeature} component={FirestoreFeature} />
            <Stack.Screen name={Screens.CloudFunctions} component={CloudFunctions} />
        </Stack.Navigator>
    )
}

