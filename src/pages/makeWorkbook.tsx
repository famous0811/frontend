import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Icon } from "../lib/images";
import viewport from "../constants/viewport";
import colors from "../constants/colors";
import { useForm } from "react-hook-form";

function MakePWorkbook() {
  const { handleSubmit } = useForm();
  function OnSubmit(data: any) {}
  // eslint-disable-next-line jsx-a11y/alt-text
  const SearchIcon = <img src={Icon.search} width="24px" height="24px" />;
  return (
    <Layout>
      <Wrap>
        <SearchFrom>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <select>
              <option value="국어">국어</option>
              <option value="영어">영어</option>
              <option value="수학">수학</option>
              <option value="과학">과학</option>
            </select>

            <div id="search" style={{ display: "flex", alignItems: "center" }}>
              <input type="text" />
              <div style={{ padding: "5px", display: "flex" }}>
                {SearchIcon}
              </div>
            </div>
          </form>
          {/* <Results /> */}
        </SearchFrom>
        <Problems></Problems>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-flow: row;
  max-width: ${viewport.desktop};
  padding: 0px 40px;
  margin: 0px auto;
  height: calc(100vh - 76px);
`;
const SearchFrom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  min-width: 300px;
  height: 90%;
  & > form > #search {
    padding: 0px 5px 0px 15px;
    background: ${colors.border};
    border-radius: 20px;
  }
`;
const Problems = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 30px;
  width: 100%;
  height: 90%;
  border: 1px solid ${colors.gray};
`;

export default MakePWorkbook;
