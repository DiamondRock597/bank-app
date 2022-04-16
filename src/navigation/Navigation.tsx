import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { Auth } from '../components/screens/auth/Auth';
import { Home } from '../components/screens/home/Home';
import { Payments } from '../components/screens/payments/Payments';
import { Services } from '../components/screens/services/Services';
import { More } from '../components/screens/more/More';
import { Support } from '../components/screens/support/Support';
import { Profile } from '../components/screens/profile/Profile';
import { Footer } from '../components/layout/Footer/Footer';

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {
    const { user } = useAuth();
    const ref = useNavigationContainerRef();

    const [name, setName] = useState<string | undefined>(undefined);

    useEffect(() => {
        const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));
        return () => ref.removeListener('state', listener);
    }, []);

    return (
        <>
            <NavigationContainer ref={ref}>
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
            {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
        </>
    );
}