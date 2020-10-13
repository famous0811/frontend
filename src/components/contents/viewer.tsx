import React from "react";
import styled, { css } from "styled-components";
import Headding from "../UI/Headding";

interface SortypeProps {
  Flex?: boolean;
  src: string;
  title: string;
  catagry: string;
}
export function Rproblem({ Flex, src, title, catagry }: SortypeProps) {
  return (
    <Wrap flex={Flex}>
      <img src={src} alt="" />
      <Headding tag="h6" tagStyle="h5">
        {title}
      </Headding>
      <div>{catagry}</div>
    </Wrap>
  );
}
export function Rworkbook({ Flex, src, title, catagry }: SortypeProps) {
  return (
    <Wrap flex={Flex}>
      <img src={src} alt="" />
      <Headding tag="h6" tagStyle="h5">
        {title}
      </Headding>
      <div>{catagry}</div>
    </Wrap>
  );
}
//미리보기용으로 추정
export function problemview() {}

export function Workbookview() {}

const Wrap = styled.div<{ flex?: boolean }>`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  ${({ flex }) =>
    flex &&
    css`
      align-items: none;
      justify-content: center;
      flex-direction: column;
    `}
`;
