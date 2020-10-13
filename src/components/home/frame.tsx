import React from "react";
import styled, { css } from "styled-components";
import Headding from "../UI/Headding";

interface HomeFrameProps {
  src: string;
  title: string;
  subtitle?: string;
  reverse?: boolean;
}
function Frame({ src, title, subtitle, reverse }: HomeFrameProps) {
  return (
    <Wrap reversy={reverse}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Headding tag="h3" tagStyle="h4">
          {title}
        </Headding>
        <div style={{ marginTop: "30px" }}>
          <Headding tag="h4" tagStyle="h5">
            {subtitle}
          </Headding>
        </div>
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={src} alt="" style={{ width: "300px", height: "300px" }} />
      </div>
    </Wrap>
  );
}
const Wrap = styled.div<{ reversy?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ reversy }) =>
    reversy &&
    css`
      flex-direction: row-reverse;
    `}
  height:100vh;
`;

export default Frame;
