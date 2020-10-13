import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border: 0;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 15px;
  &:focus {
    outline: 0;
  }
  background: #e5c7ff;
  /* opacity: 0.5; */
`;

interface WrapInputProps {
  children?: React.ReactNode;
  error?: { type: string; message: string };
  fieldName: string;
}

export function WrapInput({ fieldName, children, error }: WrapInputProps) {
  return (
    <WrapInputStyle>
      <label>
        <span>{fieldName}</span>
        {children}
      </label>
      <div className="error">{error && error.message}</div>
    </WrapInputStyle>
  );
}
const WrapInputStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  label > span {
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 17px;
  }
  .error {
    color: red;
    height: 1em;
    margin-top: 0.1em;
    margin-bottom: 0.4em;
  }
`;

export default Input;
