import React from 'react';
import { ScrollView } from 'react-native';

import { Layout } from '../../layout/Layout';
import { Padding } from '../../ui/Padding';
import { Field } from './Field';
import { Header } from './Header';
import { Message } from './Message';
import { useMessages } from './useMessages';

export const Support = () => {
    const { messages } = useMessages();

    return (
        <Layout isScrollView={false}>
            <Padding>
                <Header />
                <ScrollView style={{ height: '81%' }}>
                    {messages.map((message) => <Message message={message} key={message.text} />)}
                </ScrollView>
                <Field />
            </Padding>
        </Layout>
    )
}