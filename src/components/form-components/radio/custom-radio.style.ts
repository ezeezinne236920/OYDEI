import styled from "styled-components";

interface RadioProps {
  $gap?: string;
  $isError?: boolean;
}

export const Radio = styled.div<RadioProps>`
  /* position: relative; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .myLabel {
    display: block;
    font-family: Sora;
    font-size: 17px;
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
  }

  .radioBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.$gap};
  }

  input[type="radio"] {
    position: absolute;
    visibility: hidden;
  }

  .mainLabel {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: all 0.25s linear;
    font-family: Sora;
    font-size: 15px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    color: ${(props) =>
      props.$isError
        ? ({ theme }) => theme.formInput?.errorColor
        : ({ theme }) => theme.formInput?.label};

    &:hover {
      color: ${(props) =>
        props.$isError
          ? ({ theme }) => theme.formInput?.errorColor
          : ({ theme }) => theme.formInput?.focusColor};

      .check {
        border: 2px solid
          ${(props) =>
            props.$isError
              ? ({ theme }) => theme.formInput?.errorColor
              : ({ theme }) => theme.formInput?.focusColor};
      }
    }

    @media (max-width: 500px) {
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
    }
  }

  .check {
    position: relative;
    border: 2px solid ${(props) => (props.$isError ? "#0061E6" : "#747EA1")};
    border-radius: 100%;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.25s linear;

    &::before {
      display: block;
      content: "";
      border-radius: 100%;
      height: 11px;
      width: 11px;
      transition: background 0.25s linear;
    }
  }

  input[type="radio"]:checked ~ .mainLabel .check {
    border: 2px solid
      ${(props) =>
        props.$isError
          ? ({ theme }) => theme.formInput?.errorColor
          : ({ theme }) => theme.formInput?.focusColor};
  }

  input[type="radio"]:checked ~ .mainLabel .check::before {
    background: ${(props) =>
      props.$isError
        ? ({ theme }) => theme.formInput?.errorColor
        : ({ theme }) => theme.formInput?.focusColor};
  }

  input[type="radio"]:checked ~ .mainLabel {
    color: ${(props) =>
      props.$isError
        ? ({ theme }) => theme.formInput?.errorColor
        : ({ theme }) => theme.formInput?.focusColor};
  }

  .error {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0%;
    margin-top: 3px;
    margin-left: 10px;
    font-family: Sora;
    font-size: 12px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => (theme as any).formInput?.errorColor};
  }
`;

interface RadioControlProps {
  width?: string;
  height?: string;
  $marginX?: string;
  $marginY?: string;
}

export const RadioControl = styled.div<RadioControlProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-inline: ${(props) => (props.$marginX ? props.$marginX : "0")};
  margin-block: ${(props) => (props.$marginY ? props.$marginY : "0")};

  label:first-child {
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
    transition: all 0.1s ease-out;
    font-family: Sora;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    margin-bottom: 7px;
  }

  &:focus-within {
    label {
      color: ${({ theme }) => (theme as any).formInput?.label};
    }
  }

  @media (max-width: 500px) {
    label:first-child {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      margin-bottom: 5.7px;
    }
  }
`;
