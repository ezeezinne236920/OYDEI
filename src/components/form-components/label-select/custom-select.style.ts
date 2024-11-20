import styled from "styled-components";

interface CustomSelectValueProps {
  $isError: boolean;
  $isOpen: boolean;
  $background?: string;
  $useBg?: boolean;
}

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust the width as needed */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  .rightImage {
    width: 15.41px;
    height: 15px;
    margin-right: 15px;
  }
`;

export const LabelInner = styled.span`
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
`;

export const Display = styled.div`
  display: flex;
  font-family: Sora;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.64px;
  letter-spacing: -0.30000001192092896px;
  color: ${({ theme }) => (theme as any).formInput?.label};
  transition: all 0.2s;
  gap: 7px;
  cursor: pointer;
  max-height: 17.633px;
  padding-bottom: 1px;

  .imageContainer {
    height: 17.633px;
    width: 17.633px;
  }

  .placeholder {
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
    text-transform: none;
    font-family: Sora;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.64px;
    letter-spacing: -0.30000001192092896px;
  }

  .label {
    overflow-x: auto;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    .placeholder {
      font-size: 13px;
    }
  }
`;

export const CustomSelectValue = styled.div<CustomSelectValueProps>`
  display: flex;
  align-items: center;
  width: 100%;
  /* max-height: 41px; */
  padding-inline: 15px;
  padding-block: 8px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  gap: 7px;
  background-color: ${(props) =>
    props.$useBg && props.$isOpen
      ? ({ theme }) => theme.formInput?.bgColor
      : props.$useBg
        ? ({ theme }) => theme.formInput?.optionHoverBg
        : ({ theme }) => theme.formInput?.bgColor};
  border: ${(props) =>
    props.$isError && props.$isOpen
      ? `1px solid ${props.theme?.formInput?.errorColor}`
      : props.$isError
        ? `1px solid ${props.theme?.formInput?.errorColor}`
        : props.$isOpen
          ? `1px solid ${props.theme?.formInput?.focusColor}`
          : props.$useBg
            ? `1px solid transparent`
            : `1px solid ${props.theme?.formInput?.borderColor}`};

  @media (max-width: 500px) {
    padding-inline: 15px;
    padding-block: 8px;
  }

  &:hover {
    color: ${({ theme }) => (theme as any).formInput?.color};
    border-color: ${({ theme }) => (theme as any).formInput?.focusColor};
  }

  .arrow {
    width: 15%;
    height: 100%;
    transition: all 0.4s;
    cursor: pointer;
    pointer-events: none;
    position: absolute;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
  }
`;

export const SelectOptions = styled.div<{ open: boolean }>`
  padding-top: 10px;
  padding-bottom: 15px;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  max-height: 200px; /* Adjust the max-height as needed */
  margin-left: -1px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => (theme as any).formInput?.borderColor};
  border-radius: 5px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => (theme as any).formInput?.menuBg};
  transition: all 0.4s;
  color: ${({ theme }) => (theme as any).formInput?.menuTx};
`;

export const Option = styled.div<{ selected: boolean }>`
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  cursor: pointer;
  color: ${(props) =>
    props.selected
      ? ({ theme }) => (theme as any).formInput?.optionHoverTx
      : ({ theme }) => (theme as any).formInput?.menuTx};
  gap: 5px;
  background: ${(props) =>
    props.selected
      ? ({ theme }) => (theme as any).formInput?.optionHoverBg
      : "transparent"};

  .imageContainer {
    height: 20px;
    width: 20px;
  }

  &:hover {
    background: ${({ theme }) => (theme as any).formInput?.optionHoverBg};
    color: ${({ theme }) => (theme as any).formInput?.optionHoverTx};
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
  }
`;

export const Error = styled.span`
  margin: 0%;
  margin-bottom: 10px;
  margin-left: 2px;
  margin-top: 2px;
  font-family: Sora;
  font-size: 11px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => (theme as any).formInput?.errorColor};
`;

export const SearchBox = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => (theme as any).formInput?.borderColor};
  transition: border-color 0.1s;
  padding: 7px 12px;
  margin-bottom: 8px;

  &:focus-within {
    border-color: ${({ theme }) => theme?.formInput?.borderColor};
  }

  button {
    color: ${({ theme }: any) => theme?.formInput.placeholder};
    padding: 0;
    border: 0 solid transparent;
    background-color: transparent;
  }

  .myInput {
    padding: 0;
    width: 93%;
    background-color: transparent;
    font-family: Sora;
    font-size: 14px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: ${({ theme }) => (theme as any).formInput?.color};

    &::placeholder {
      color: ${({ theme }) => (theme as any).formInput?.placeholder};
    }

    &:focus {
      outline: none;
      border-color: transparent;
    }
  }

  @media (min-width: 745px) and (max-width: 860px) {
    max-width: 100%;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface SelectOptionsProps {
  open?: boolean;
  height?: any;
  width?: any;
  $marginX?: any;
  $marginY?: any;
}

export const LabelSelectControl = styled.div<SelectOptionsProps>`
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
