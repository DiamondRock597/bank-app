import React from 'react';
import { FlatList, Text } from 'react-native';

import { Layout } from '../../../layout/Layout';
import { Button } from '../../../ui/Button';
import { Padding } from '../../../ui/Padding';
import { useFirestoreFeature } from './useFirestoreFeature';

export const FirestoreFeature = () => {
    const { oneTimeRead, addNewUser, updateUser, deleteUser, batchDeleteAllUsers, users } = useFirestoreFeature();

    return (
        <Layout isScrollView>
            <Padding>
                <FlatList data={users} keyExtractor={(item) => item._id} renderItem={({ item }) => <Text>{item.displayName}</Text>} />
                <Button title='One time read' onPress={oneTimeRead} />
                <Button title='Add new user' onPress={addNewUser} />
                <Button title='Update first user' onPress={updateUser} />
                <Button title='Delete user' onPress={deleteUser} />
                <Button title='Batch delete all users' onPress={batchDeleteAllUsers} />
            </Padding>
        </Layout>
    )
}

