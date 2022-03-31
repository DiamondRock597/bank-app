import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { Auth } from '../components/screens/auth/Auth';
import { Home } from '../components/screens/home/Home';
import { Payments } from '../components/screens/payments/Payments';
import { Services } from '../components/screens/services/Services';
import { More } from '../components/screens/more/More';
import { Support } from '../components/screens/support/Support';
import { Profile } from '../components/screens/profile/Profile';

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <>
                        <Stack.Screen component={Home} name='Home' />
                        <Stack.Screen component={Payments} name='Payments' />
                        <Stack.Screen component={Services} name='Services' />
                        <Stack.Screen component={More} name='More' />
                        <Stack.Screen component={Support} name='Support' />
                        <Stack.Screen component={Profile} name='Profile' />
                    </>
                ) : <Stack.Screen component={Auth} name='Auth' />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}