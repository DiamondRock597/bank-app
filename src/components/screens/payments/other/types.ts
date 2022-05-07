import { IFooterItem } from "../../../layout/Footer/types";

export interface IOtherItem extends Pick<IFooterItem, 'iconName'>{
    title: string;
}