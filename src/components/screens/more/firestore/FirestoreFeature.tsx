import React from 'react';

import { Layout } from '../../../layout/Layout';
import { Button } from '../../../ui/Button';
import { Padding } from '../../../ui/Padding';
import { useFirestoreFeature } from './useFirestoreFeature';

export const FirestoreFeature = () => {
    const { oneTimeRead, addNewUser, updateUser, deleteUser, batchDeleteAllUsers } = useFirestoreFeature();

    return (
        <Layout isScrollView>
            <Padding>
                <Button title='One time read' onPress={oneTimeRead} />
                <Button title='Add new user' onPress={addNewUser} />
                <Button title='Update first user' onPress={updateUser} />
                <Button title='Delete user' onPress={deleteUser} />
                <Button title='Batch delete all users' onPress={batchDeleteAllUsers} />
            </Padding>
        </Layout>
    )
}

