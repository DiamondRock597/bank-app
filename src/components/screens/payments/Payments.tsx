import React from 'react';

import { Layout } from '../../layout/Layout';
import { Heading } from '../../ui/Heading';
import { Contacts } from './contacts/Contacts';
import { Other } from './other/Other';

export const Payments = () => {
    return (
        <Layout>
            <Heading text='Payment' />
            <Contacts />
            <Other />
        </Layout>
    )
}