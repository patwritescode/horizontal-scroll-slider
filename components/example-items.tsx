import styled from "@emotion/styled";

export type CardItemProps = {
    backgroundColor: string;
}
export const CardItem = styled.div<CardItemProps>({
    height: 300,
    width: 280,
    whiteSpace: "normal",
    flex: `1 0 300px`,
    scrollSnapAlign: "start",
}, ({ backgroundColor }) => ({
    backgroundColor,
}));

export const HalfWidthItem = styled.div<CardItemProps>({
    height: 300,
    width: "50%",
    whiteSpace: "normal",
    flex: `1 0 50%`,
}, ({ backgroundColor }) => ({
    backgroundColor,
}));

export const VariableWidthItem = styled.div<CardItemProps & { width: number }>({
    height: 300,
    whiteSpace: "normal",
    maxWidth: "100%",
}, ({ width, backgroundColor }) => ({
    width,
    backgroundColor,
    flex: `1 0 ${width}px`,
}));
