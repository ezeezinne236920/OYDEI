import styled from "styled-components";

interface CustomSelectValueProps {
  $isError: boolean;
  $isOpen: boolean;
  $background?: string;
  $useBg?: boolean;
}

export const CustomSelectContainer = styled.div`
  position: relative;
  width: fit-content; /* Adjust the width as needed */
  max-width: 230px;
  min-width: 136px;
  /* margin-top: 8px; */

  @media (max-width: 410px) {
    max-width: unset;
  }
`;

export const CustomSelectValue = styled.div<CustomSelectValueProps>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  padding-inline: 13.5px;
  padding-right: 23.5px;
  padding-block: 11px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: Sora;
  font-size: 13px;
  font-weight: 400;
  line-height: 17.64px;
  letter-spacing: -0.30000001192092896px;
  color: ${({ theme }) => (theme as any).formInput?.label};
  position: relative;
  transition: all 0.2s;
  gap: 5px;
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

  &:hover {
    color: ${({ theme }) => (theme as any).formInput?.color};
    border-color: ${({ theme }) => (theme as any).formInput?.focusColor};
  }

  .placeholder {
    color: ${({ theme }) => (theme as any).formInput?.placeholder};
    text-transform: none;
    font-size: 14px;
    line-height: 17.64px;
    white-space: nowrap;
  }

  .label {
    white-space: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 40px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
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

  .imageContainer {
    height: 20px;
    width: 20px;
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
  font-size: 12px;
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
