import styled from "styled-components";

export const Container = styled.div`
  background: red;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;
