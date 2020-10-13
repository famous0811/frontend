import React, { useState } from "react";
import styled, { css } from "styled-components";
import viewport from "../../constants/viewport";
import Headding from "../UI/Headding";
import colors from "../../constants/colors";
import Button from "../UI/Button";
import Ul, { Li } from "../UI/Ul";
import { Link } from "react-router-dom";
import useModal from "../../hooks/useModal";
function Header() {
  const [scrollpos, setscrollpos] = useState(0);
  const [onOff, setOnOff] = useState(true);
  const { Open } = useModal("login");
  window.onscroll = function () {
    // console.log(window.pageYOffset * 0.01);
    if (0 < scrollpos && scrollpos < 7) window.setTimeout(500);
    if (scrollpos > window.pageYOffset * 0.01) {
      setOnOff(false);
    } else {
      setOnOff(true);
    }
    setscrollpos(window.pageYOffset * 0.01);
  };
  return (
    <Wrap state={onOff}>
      <LeftHeader>
        <Title>
          <Headding tag="h2" tagStyle="h3">
            <Link to="/">connet</Link>
          </Headding>
        </Title>
        <Ul>
          <Li>
            <b>
              <Link to="/problem">문제만들기</Link>
            </b>
          </Li>
          <Li>
            <b>
              <Link to="/problems">문제집만들기</Link>
            </b>
          </Li>
          <Li>
            <b>
              <Link to="/mypage">내 문제</Link>
            </b>
          </Li>
          <Li>
            <b>
              <Link to="/community">커뮤니티</Link>
            </b>
          </Li>
        </Ul>
      </LeftHeader>
      <RightHeader islogin={false}>
        <Button onClick={Open}>로그인</Button>
        <Button>
          <Link to="/signup">회원가입</Link>
        </Button>
        {/* <Button>로그아웃</Button> */}
      </RightHeader>
    </Wrap>
  );
}

const Wrap = styled.div<{ state: boolean }>`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 30px;

  height: 76px;
  z-index: 100;
  float: left;
  background: ${colors.white};
  @media (max-width: ${viewport.desktop}) {
    padding: 10px 20px;
  }
  transition: transform 0.33s ease;
  ${({ state }) => {
    return state
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(-90%);
        `;
  }}
`;
const Title = styled.div`
  min-width: 150px;
  color: ${colors.primary};
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
`;
interface RightHeaderprops {
  islogin: boolean;
}
const RightHeader = styled.div<RightHeaderprops>`
  display: flex;
  /* width: 100%; */
  min-width: 300px;
  ${({ islogin }) =>
    islogin &&
    css`
      min-width: 200px;
    `}
  padding: 0 30px;
  & > button:first-child {
    margin-right: 20px;
  }
`;
export default Header;
