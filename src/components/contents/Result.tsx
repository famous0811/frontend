import React from "react";
import styled from "styled-components";
import { Rproblem, Rworkbook } from "./viewer";

type whatfounds = "myproblem" | "myworkbook" | "save";
interface Resultsprops {
  what?: whatfounds;
  flex?: boolean;
}
function Results({ what, flex }: Resultsprops) {
  if (what !== "save")
    return (
      <Wrap>
        {what === "myproblem" ? (
          <Rproblem
            Flex={flex}
            title="test"
            src="https://via.placeholder.com/150"
            catagry="국어"
          />
        ) : (
          <Rworkbook
            Flex={flex}
            title="수능"
            src="https://via.placeholder.com/150"
            catagry="이거 풀면 죽음"
          />
        )}
      </Wrap>
    );

  return (
    <Wrap>
      <SaveWrap>
        <div>문제</div>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          <Rproblem
            Flex={flex}
            title="test"
            src="https://via.placeholder.com/150"
            catagry="국어"
          />
        </div>
        <div>문제집</div>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          <Rworkbook
            Flex={flex}
            title="수능"
            src="https://via.placeholder.com/150"
            catagry="이거 풀면 죽음"
          />
        </div>
      </SaveWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SaveWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Results;
