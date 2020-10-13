import styled from "styled-components";
import colors from "../../constants/colors";

interface Ulprops {
  children?: React.ReactNode;
}

const Ul = styled.ul`
  display: flex;
`;
export const Li = styled.li`
  &:after {
    content: "";
    border-left: 1px solid ${colors.gray};
    margin: 0 3px;
  }
  &:last-child:after {
    content: none;
  }
`;
export default Ul;
