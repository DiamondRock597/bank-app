import React from 'react';

import { Layout } from '../../layout/Layout';
import { Accounts } from './accounts/Accounts';
import { ApplyNewProducts } from './apply-new-products/ApplyNewProducts';
import { Header } from './Header';
import { Stories } from './stories/Stories';

export const Home = () => {
    return (
        <Layout>
            <Header />
            <Stories />
            <Accounts />
            <ApplyNewProducts />
        </Layout>
    )
}