import type { IconObj } from "./picker.types";
import type { ReactNode } from "react";
export interface IconProps {
    icon: IconObj;
    fallback: ReactNode;
}
