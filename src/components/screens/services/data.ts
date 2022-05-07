import { MaterialIcons } from '@expo/vector-icons';


export interface IService {
    iconName: keyof typeof MaterialIcons.glyphMap;
    title: string;
    percent: number;
}

export const services: Array<IService> = [
    {
        iconName: 'movie',
        title: 'Cinema',
        percent: 15
    },
    {
        iconName: 'child-care',
        title: 'Child',
        percent: 20
    },
    {
        iconName: 'handyman',
        title: 'Handyman',
        percent: 30
    },
    {
        iconName: 'movie',
        title: 'Cinema',
        percent: 11
    },
    {
        iconName: 'movie',
        title: 'Cinema',
        percent: 22
    },
    {
        iconName: 'movie',
        title: 'Cinema',
        percent: 1
    },
    {
        iconName: 'palette',
        title: 'Pallette',
        percent: 99
    },
    {
        iconName: 'movie',
        title: 'Cinema',
        percent: 55
    },
];