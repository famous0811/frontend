import React, { useState } from "react";
import Layout from "../components/layout";
import styled, { css } from "styled-components";
import viewport from "../constants/viewport";
import Button from "../components/UI/Button";
import colors from "../constants/colors";
import { Icon } from "../lib/images";
type What = "내문제" | "내 문제집" | "저장한 문제집";
type Sort = "flex" | "grid";
function Mypage() {
  const [what, setwhat] = useState<What>("내문제");
  const [sort, setsort] = useState<Sort>("flex");
  return (
    <Layout>
      <Wrap>
        <div className="select_form">
          <Button
            color={colors.primary}
            back={colors.white}
            hov={colors.gray}
            onClick={(e) => setwhat("내문제")}
            css={ButtonCss}
            className={what === "내문제" ? "click" : ""}
          >
            내문제
          </Button>
          <Button
            color={colors.primary}
            back={colors.white}
            hov={colors.gray}
            onClick={() => setwhat("내 문제집")}
            css={ButtonCss}
            className={what === "내 문제집" ? "click" : ""}
          >
            내 문제집
          </Button>
          <Button
            color={colors.primary}
            back={colors.white}
            hov={colors.gray}
            onClick={() => setwhat("저장한 문제집")}
            css={ButtonCss}
            className={what === "저장한 문제집" ? "click" : ""}
          >
            저장한 자료
          </Button>
        </div>
        <div className="select_data">
          <div className="data_sort">
            <button onClick={() => setsort("flex")}>
              <img src={Icon.list} alt="" />
            </button>
            <button onClick={() => setsort("grid")}>
              <img src={Icon.grid} alt="" />
            </button>
          </div>
          <div className={sort === "flex" ? "flex" : "grid"}></div>
        </div>
      </Wrap>
    </Layout>
  );
}
interface Click {}
const Wrap = styled.div`
  max-width: ${viewport.desktop};
  padding: 0px 40px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 76px);
  & > div {
    display: flex;
    flex-flow: column wrap;
    border: 1px solid ${colors.gray};
    height: 100%;
    max-height: 95%;
  }
  & > .select_form {
    min-width: 300px;
    & > .click {
      background: ${colors.gray};
      border: ${colors.gray};
      color: ${colors.white};
    }
  }
  & > .select_data {
    border-left: none;
    width: 100%;
    & > .data_sort {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid ${colors.gray};
      & > button:hover {
        background: ${colors.gray};
      }
    }
    & > .flex {
      display: flex;
      flex-flow: row wrap;
    }
    & > .gird {
    }
  }
`;

const ButtonCss = css`
  border-radius: 0px;
`;
export default Mypage;
