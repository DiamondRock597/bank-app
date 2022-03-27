import { RootStackParamList } from './src/navigation/types';

declare global {
    namespace ReactNavigation {
        interface RootStackParamList extends RootStackParamList { }
    }
}