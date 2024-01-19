/// <reference types="react" />
import type { outlineIcons24 } from "./picker.icons";
export interface PickerProps {
    setValue: React.Dispatch<React.SetStateAction<IconObj | undefined>>;
    iconDefaultStyle?: React.CSSProperties;
    iconClassName?: string;
}
export interface IconObj {
    name: keyof typeof outlineIcons24;
    type: string;
    size: '24';
}
