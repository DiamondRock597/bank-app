import React from 'react';

import { Layout } from '../../../layout/Layout';
import { Button } from '../../../ui/Button';
import { Padding } from '../../../ui/Padding';
import { useFirestoreFeature } from './useFirestoreFeature';

export const FirestoreFeature = () => {
    const { oneTimeRead, addNewUser } = useFirestoreFeature();

    return (
        <Layout isScrollView>
            <Padding>
                <Button title='One time read' onPress={oneTimeRead} />
                <Button title='Add new user' onPress={addNewUser} />
            </Padding>
        </Layout>
    )
}

