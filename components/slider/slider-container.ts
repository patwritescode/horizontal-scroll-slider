import styled from "@emotion/styled";

export const SliderContainer = styled.div({
    overflow: "auto",
    whiteSpace: "nowrap",
    backgroundColor: "red",
    display: "flex",
    alignItems: "stretch",
    scrollBehavior: "smooth",
    position: "relative",
    scrollSnapType: "x mandatory",
});
