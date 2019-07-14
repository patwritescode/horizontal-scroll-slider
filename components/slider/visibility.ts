const getRect = (container: HTMLDivElement, ele: HTMLDivElement) => {
    const containerRect = container.getBoundingClientRect();
    const eleRect = ele.getBoundingClientRect();
    return {
        left: eleRect.left - containerRect.left,
        right: eleRect.right - containerRect.right,
    };
};

const isFullyVisible = (container: HTMLDivElement, ele: HTMLDivElement) => {
    const rect = getRect(container, ele);
    return rect.left >= 0 && rect.right <= 0;
};

export const getVisibilityArray = (
    container: React.MutableRefObject<HTMLDivElement>,
    items: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
) => {
    return extractElements(items).map((element) => isFullyVisible(container.current, element));
};

export const locateMatch = (
    items: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    index: number,
) => {
    return extractElements(items)[index];
};

const extractElements = (
    items: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
) => {
    return items.current.reduce((prev, curr) => {
        if (!curr.current) {
            return prev;
        }
        return prev.concat(curr.current);
    }, [] as HTMLDivElement[]);
};
