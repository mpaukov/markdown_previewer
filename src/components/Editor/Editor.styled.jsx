import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EditorWrapper = styled.div`
  margin: 0 auto;
  width: 480px;
  min-height: 240px;
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
  background-color: #5681f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin: 0 15px;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #5681f7;
  border: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: ${({ sz }) => (sz ? "80vh" : "320px")};
  resize: vertical;
  padding: 24px;
`;
