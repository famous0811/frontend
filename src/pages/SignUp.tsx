import React from "react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";
import Input, { WrapInput } from "../components/UI/Input";
import styled from "styled-components";
import Button from "../components/UI/Button";
import { useHistory } from "react-router-dom";

function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  });
  const history = useHistory();
  const password = watch("password");
  function onSubmit(data: any) {
    history.replace("/");
    alert("이메일 인증을 한뒤에 이용해주세요!");
  }
  return (
    <Layout title="signup">
      <Wrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WrapInput fieldName="아이디" error={errors.usersId}>
            <Input
              type="text"
              name="usersId"
              autoComplete="userid"
              ref={register({
                required: "아이디를 입력해주세요!.",
                minLength: {
                  value: 6,
                  message: "아이디는 6자 이상이어야 합니다.",
                },
              })}
            />
          </WrapInput>
          <WrapInput fieldName="비밀번호" error={errors.password}>
            <Input
              type="password"
              name="password"
              autoComplete="password"
              ref={register({
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이어야 합니다.",
                },
              })}
            />
          </WrapInput>
          <WrapInput fieldName="비밀번호 확인" error={errors.passwordAccept}>
            <Input
              type="password"
              autoComplete="new-password"
              name="passwordAccept"
              ref={register({
                validate: (value) =>
                  password === value || "비밀번호를 다시 확인해주세요.",
              })}
            />
          </WrapInput>
          <WrapInput fieldName="이메일" error={errors.email}>
            <Input
              type="text"
              autoComplete="email"
              name="email"
              ref={register({
                required: "이메일을 입력해주세요!",
                pattern: {
                  message: "이메일을 다시확인해주세요.",
                  value: /.com$/,
                },
              })}
            />
          </WrapInput>
          <div style={{ marginTop: "30px" }}>
            <Button>회원가입</Button>
          </div>
        </form>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  padding: 20px 30px;
  margin: 5% auto;
  max-width: 640px;
  width: 100%;
  & > form {
    display: flex;
    flex-direction: column;
  }
`;
export default SignUp;
