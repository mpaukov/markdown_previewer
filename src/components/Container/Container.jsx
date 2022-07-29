import styled from "styled-components";
const Div = styled.div`
  background-color: #92acf5;
  margin: 0 auto;
  padding: 60px;
  min-height: 100vh;
`;

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;
