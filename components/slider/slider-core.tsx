import React, { useRef, ReactElement } from "react";
import { SliderContainer } from "./slider-container";
import { getVisibilityArray, locateMatch } from "./visibility";


export type SliderProps = {
    children: ReactElement | ReactElement[];
    renderNext?: (next: () => void) =>  React.ReactNode;
    renderPrev?: (prev: () => void) => React.ReactNode;
};
export const Slider: React.FC<SliderProps> = ({
    children,
    renderNext,
    renderPrev,
}) => {
    const containerRef = useRef<HTMLDivElement>(null!);
    const itemRefs = useRef(React.Children.map(children, () => React.createRef<HTMLDivElement>()));
    const next = () => {
        const visibilityArr = getVisibilityArray(containerRef, itemRefs);
        const potentialNextElementIndex = visibilityArr.lastIndexOf(true) + 1;
        const item = locateMatch(itemRefs, potentialNextElementIndex);
        if (item) {
            containerRef.current.scrollTo(item.offsetLeft, 0);
        }
    };
    const prev = () => {
        const visibilityArr = getVisibilityArray(containerRef, itemRefs);
        const potentialPrevElementIndex = visibilityArr.indexOf(true) - 1;
        const item = locateMatch(itemRefs, potentialPrevElementIndex);
        if (item && item) {
            containerRef.current.scrollTo(
                item.offsetLeft
                - containerRef.current.clientWidth
                + item.clientWidth,
                0,
            );
        }
    };
    return (
        <div>
            {renderPrev && renderPrev(prev)}
            <SliderContainer ref={containerRef}>
                {React.Children.map<ReactElement, ReactElement>(children, (child, index) => {
                    return React.cloneElement(child, { ref: itemRefs.current[index] });
                })}
            </SliderContainer>
            {renderNext && renderNext(next)}
        </div>
    );
};
