import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  input {
    border: 0;
    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
    font-size: 1.3rem;
    padding: 1.65rem;

    border-radius: 5px 0px 0px 5px;

    color: (--white);
    border: 1.5px solid transparent;

    /* outline-width: 0; */
    outline-color: var(--white);

    &:hover {
      border: 1.5px solid #fff;
    }

    &::placeholder {
      color: var(--white);
      opacity: 0.5;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid red;
    outline-color: red;

    padding: 1.66rem;
    font-size: 2rem;
    background: red;
    color: red;
    border-radius: 0px 5px 5px 0px;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      ${(props) =>
        props.isLoading &&
        css`
          @keyframes Rote {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          animation: Rote 1s infinite;
        `}
    }

    ${(props) =>
      props.isFilled &&
      css`
        border: 1.5px solid red;
        background: red;
      `}
  }

  @media (max-width: 520px) {
    input {
      width: 78%;
    }
  }
`;
