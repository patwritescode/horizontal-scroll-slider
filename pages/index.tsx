import React from "react";
import { Global } from "@emotion/core";
import { Slider, CardItem, HalfWidthItem, VariableWidthItem } from "../components";

const IndexPage: React.FC = () => {
    return (
        <div
            css={{
                width: 800,
                maxWidth: "100%",
                margin: "0 auto",
            }}
        >
            <Global
                styles={{
                    "html, body": {
                        padding: 0,
                        margin: 0,
                    }
                }}
            />
            <Slider
                renderPrev={(prev, canGoPrev) => <button onClick={prev} style={{ color: canGoPrev ? "green" : "red" }}>prev</button>}
                renderNext={(next, canGoNext) => <button onClick={next} style={{ color: canGoNext ? "green" : "red" }}>next</button>}
            >
                <CardItem backgroundColor="violet">one</CardItem>
                <CardItem backgroundColor="indigo">two</CardItem>
                <CardItem backgroundColor="blue">three</CardItem>
                <CardItem backgroundColor="green">four</CardItem>
                <CardItem backgroundColor="yellow">five</CardItem>
                <CardItem backgroundColor="orange">six</CardItem>
                <CardItem backgroundColor="red">seven</CardItem>
            </Slider>
            <div css={{ height: 100 }} />
            <Slider
                renderPrev={(prev) => <button onClick={prev}>prev</button>}
                renderNext={(next) => <button onClick={next}>next</button>}
            >
                <HalfWidthItem backgroundColor="violet">one</HalfWidthItem>
                <HalfWidthItem backgroundColor="indigo">two</HalfWidthItem>
                <HalfWidthItem backgroundColor="blue">three</HalfWidthItem>
                <HalfWidthItem backgroundColor="green">four</HalfWidthItem>
                <HalfWidthItem backgroundColor="yellow">five</HalfWidthItem>
                <HalfWidthItem backgroundColor="orange">six</HalfWidthItem>
                <HalfWidthItem backgroundColor="red">seven</HalfWidthItem>
            </Slider>
            <div css={{ height: 100 }} />
            <Slider
                renderPrev={(prev) => <button onClick={prev}>prev</button>}
                renderNext={(next) => <button onClick={next}>next</button>}
            >
                <VariableWidthItem backgroundColor="violet" width={300}>one</VariableWidthItem>
                <VariableWidthItem backgroundColor="indigo" width={100}>two</VariableWidthItem>
                <VariableWidthItem backgroundColor="green" width={500}>four</VariableWidthItem>
                <VariableWidthItem backgroundColor="yellow" width={250}>five</VariableWidthItem>
                <VariableWidthItem backgroundColor="orange" width={50}>six</VariableWidthItem>
                <VariableWidthItem backgroundColor="red" width={200}>seven</VariableWidthItem>
            </Slider>
        </div>
    );
};

export default IndexPage;
