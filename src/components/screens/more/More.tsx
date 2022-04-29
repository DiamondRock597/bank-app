import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Screens } from '../../../navigation/types';

import { Layout } from '../../layout/Layout';
import { Button } from '../../ui/Button';
import { Heading } from '../../ui/Heading';
import { Padding } from '../../ui/Padding';

export const More: React.FC = () => {
    const { navigate } = useNavigation();

    return (
        <Layout>
            <Padding>
                <Button title='Firestore' onPress={() => navigate(Screens.FirestoreFeature)} />
                <Button title='Cloud functions' onPress={() => navigate(Screens.CloudFunctions)} />
            </Padding>
        </Layout>
    )
}