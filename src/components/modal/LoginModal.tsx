import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Input, { WrapInput } from "../UI/Input";
function LoginModal() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  function OnSubmit(data: any) {
    history.replace("/");
  }
  return (
    <Modal title="로그인" modalname="login">
      <Wrap>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <WrapInput fieldName="아이디">
            <Input type="text" name="id" ref={register({ required: true })} />
          </WrapInput>
          <WrapInput fieldName="비밀번호">
            <Input
              type="password"
              name="password"
              ref={register({ required: true })}
            />
          </WrapInput>
          <Button>로그인</Button>
        </form>
      </Wrap>
    </Modal>
  );
}
const Wrap = styled.div``;
export default LoginModal;
