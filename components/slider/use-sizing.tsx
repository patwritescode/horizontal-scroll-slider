// import React from "react";
// import { SliderProps } from "./slider-core";
export function getPercentageWidth(value: number, spacing: number) {
    if (spacing === 0) {
        return `${value}%`;
    }
    return `calc(${value}% - ${(spacing / 2)}px)`
}
// export function useSizing(props: SliderProps) {
//     const { itemSizing, itemWidth, spacing } = props;
//     let width = "";
//     if (itemSizing === "%") {
//         width = getPercentageWidth(itemWidth, spacing);
//     } else {
//         width = `${itemWidth}px`;
//     }
//     return {
//         width,
//         sizing: itemSizing,
//         spacing,
//     };
// }
