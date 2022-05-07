import React from 'react';
import tw from 'tailwind-rn';

import { RootStackParamList } from '../../../navigation/types';
import { Padding } from '../../ui/Padding';
import { menu } from './menu';
import { NavItem } from './NavItem';

interface Props {
    navigate: (screenName: keyof RootStackParamList) => void;
    currentRoute: string;
}

export const Footer: React.FC<Props> = ({ navigate, currentRoute }) => {
    return (
        <Padding style={{
            ...tw('flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'),
            borderTopColor: '#E1E1E1',
            borderTopWidth: 1
        }}>
            {menu.map((menuItem) => (
                <NavItem currentRoute={currentRoute} navigate={navigate} key={menuItem.title} item={menuItem} />
            ))}
        </Padding>
    )
}