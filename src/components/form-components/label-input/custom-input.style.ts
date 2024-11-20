import styled from "styled-components";

export const LabelInputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

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

export const MyInput = styled.div<{ $isError?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 17.633px;
  border: 1px solid
    ${(props) =>
      props.$isError
        ? ({ theme }) => theme.formInput?.errorColor
        : ({ theme }) => theme.formInput?.borderColor};
  border-radius: 5px;
  transition: all 0.1s ease-out;
  padding-inline: 15px;
  padding-block: 8px;
  font-family: Sora;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.64px;
  letter-spacing: -0.30000001192092896px;
  cursor: pointer;
  color: ${({ theme }) => (theme as any).formInput?.color};

  svg {
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
  }

  &:focus-within {
    outline: none;
    border-color: ${({ theme }) => (theme as any).formInput?.focusColor};
    color: ${({ theme }) => (theme as any).formInput?.color};

    svg {
      color: ${({ theme }) => (theme as any).formInput?.color};
    }
  }

  &:hover {
    color: ${({ theme }) => (theme as any).formInput?.color};
    border-color: ${({ theme }) => (theme as any).formInput?.focusColor};

    svg {
      color: ${({ theme }) => (theme as any).formInput?.placeholder};
    }
  }

  @media (max-width: 500px) {
    padding-inline: 15px;
    padding-block: 8px;
  }

  .label_inner {
    font-family: Sora;
    font-size: 12px;
    font-weight: 400;
    line-height: 15.12px;
    letter-spacing: -0.30000001192092896px;
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
    margin-bottom: 6px;

    @media (max-width: 500px) {
      font-size: 11px;
    }
  }

  .myInput {
    padding: 0;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => (theme as any).formInput?.color};
    border: 0 solid transparent;
    font-family: Sora;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.64px;
    letter-spacing: -0.30000001192092896px;

    &::placeholder {
      color: ${({ theme }) => (theme as any).formInput?.placeholder};
    }

    &:focus {
      outline: none !important;
      border-color: transparent !important;
      outline: none;
      color: ${({ theme }) => (theme as any).formInput?.color};
    }

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
`;

export const LabelInputControl = styled.div<{
  width?: string;
  height?: string;
  $marginX?: string;
  $marginY?: string;
}>`
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
      line-height: 18px;
      letter-spacing: 0em;
      margin-bottom: 5.7px;
    }
  }
`;
