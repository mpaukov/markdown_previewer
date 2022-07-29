import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PreviewerWrapper = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 640px;
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

export const TextArea = styled.div`
  width: 100%;
  min-height: ${({ sz }) => (sz ? "80vh" : "320px")};
  padding: 24px;
  background-color: #b0c3f7;

  img {
    width: 100%;
  }
`;
