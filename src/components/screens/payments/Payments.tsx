import { View, Text } from 'react-native'
import React from 'react'
import { Layout } from '../../layout/Layout'
import { Heading } from '../../ui/Heading'
import { Contacts } from './contacts/Contacts'

export const Payments = () => {
    return (
        <Layout>
            <Heading text='Payment' />
            <Contacts />
            {/* <Other /> */}
        </Layout>
    )
}