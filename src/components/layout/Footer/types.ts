import { AntDesign } from '@expo/vector-icons';
import { RootStackParamList } from "../../../navigation/types";

export interface IFooterItem {
    iconName: keyof typeof AntDesign.glyphMap;
    title: keyof RootStackParamList;
}