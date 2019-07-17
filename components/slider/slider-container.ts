import styled from "@emotion/styled";

export const SliderContainer = styled.div({
    overflow: "auto",
    whiteSpace: "nowrap",
    backgroundColor: "red",
    display: "flex",
    alignItems: "stretch",
    scrollBehavior: "smooth",
    position: "relative",
    // scrollSnapType: "x mandatory",
    // scroll snap type is a bit janky on swiping back since i don't think we can say snap to the right
});
