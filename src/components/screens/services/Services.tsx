import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

import { services } from './data';
import { Layout } from '../../layout/Layout'
import { ServiceItem } from './ServiceItem';

export const Services = () => {
    return (
        <Layout>
            <Text style={tw('text-center text-lg mb-6')}>Area</Text>
            <View style={tw('flex-row flex-wrap justify-center')}>
                {services.map((service) => <ServiceItem key={service.title} service={service} />)}
            </View>
        </Layout>
    )
}
