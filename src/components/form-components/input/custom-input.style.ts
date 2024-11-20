import styled from "styled-components";

interface InputWrapperProps {}

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .error {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0%;
    /* padding: 20px 0px; */
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

interface MyInputProps {
  $isError?: boolean;
}

export const MyInput = styled.input<MyInputProps>`
  width: 100%;
  background-color: ${({ theme }) => (theme as any).formInput?.bgColor};
  /* background-color: transparent; */
  border: 1px solid #272f4e;
  border-radius: 5px;
  transition: all 0.1s ease-out;
  padding-inline: 18.07px;
  padding-block: 15px;
  font-family: Sora;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.64px;
  letter-spacing: -0.30000001192092896px;
  color: ${({ theme }) => (theme as any).formInput?.placeholder};
  /* color: #747ea1; */

  &:hover {
    color: ${({ theme }) => (theme as any).formInput?.color};
    border-color: ${({ theme }) => (theme as any).formInput?.focusColor};

    &::placeholder {
      color: ${({ theme }) => (theme as any).formInput?.placeholder};
    }
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => (theme as any).formInput?.focusColor};
    color: ${({ theme }) => (theme as any).formInput?.color};
  }

  &::placeholder {
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
  }

  @media (max-width: 500px) {
    padding-inline: 15px;
    padding-block: 12px;
    font-size: 13px;
  }
`;

interface InputControlProps {
  width?: string;
  height?: string;
  $marginX?: string;
  $marginY?: string;
}

export const InputControl = styled.div<InputControlProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-inline: ${(props) => (props.$marginX ? props.$marginX : "0")};
  margin-block: ${(props) => (props.$marginY ? props.$marginY : "0")};

  label {
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
    transition: all 0.1s ease-out;
    font-family: Sora;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    margin-bottom: 10px;
  }

  &:focus-within {
    label {
      color: ${({ theme }) => (theme as any).formInput?.label};
    }
  }

  @media (max-width: 500px) {
    label {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      margin-bottom: 5.7px;
    }
  }
`;
