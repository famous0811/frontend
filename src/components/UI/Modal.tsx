import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import Headding from "../UI/Headding";
import useModal from "../../hooks/useModal";
import { Modals } from "../../store/slices/modal";
interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  modalname: Modals;
}

function Modal({ children, title, modalname }: ModalProps) {
  const { isOpen, closed } = useModal(modalname);
  if (!isOpen) return null;
  return (
    <Wrap onClick={closed}>
      <Body>
        <div style={{ marginBottom: "10px" }}>
          <Headding tag="h2" tagStyle="h4">
            {title}
          </Headding>
        </div>
        {children}
      </Body>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  background: ${colors.gray};
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: appear 0.5s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;

const Body = styled.div`
  position: absolute;
  background: ${colors.white};
  max-width: 720px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  box-sizing: border-box;
  padding: 1em 2em;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: background 0.5s;
`;
export default Modal;
