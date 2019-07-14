import React, { useRef, ReactElement, useState } from "react";
import { SliderContainer } from "./slider-container";
import { getVisibilityArray, locateMatch } from "./visibility";
import debounce from "lodash.debounce";

export type SliderProps = {
    children: ReactElement | ReactElement[];
    renderNext?: (next: () => void, canGoNext: boolean) =>  React.ReactNode;
    renderPrev?: (prev: () => void, canGoPrev: boolean) => React.ReactNode;
};
export const Slider: React.FC<SliderProps> = ({
    children,
    renderNext,
    renderPrev,
}) => {
    const containerRef = useRef<HTMLDivElement>(null!);
    const itemRefs = useRef(React.Children.map(children, () => React.createRef<HTMLDivElement>()));
    const [{ canGoNext, canGoPrev }, setScrollState] = useState({ canGoPrev: false, canGoNext: true });
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
    const updateScrollState = debounce((element: HTMLDivElement) => {
        const canGoNext = element.scrollLeft + element.clientWidth < element.scrollWidth;
        const canGoPrev = element.scrollLeft !== 0;
        setScrollState({ canGoNext, canGoPrev });
    }, 100);
    return (
        <div>
            {renderPrev && renderPrev(prev, canGoPrev)}
            <SliderContainer ref={containerRef} onScroll={(e) => updateScrollState(e.currentTarget)}>
                {React.Children.map<ReactElement, ReactElement>(children, (child, index) => {
                    return React.cloneElement(child, { ref: itemRefs.current[index] });
                })}
            </SliderContainer>
            {renderNext && renderNext(next, canGoNext)}
        </div>
    );
};
