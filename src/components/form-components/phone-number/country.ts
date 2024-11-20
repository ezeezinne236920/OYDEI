import styled from "styled-components";

export const CustomSelectContainer = styled.div`
  width: fit-content;
  max-width: 200px;
`;

export const CustomSelectValue = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: all 0.1s;
  gap: 5px;
  font-family: Sora;
  font-size: 28px;
  font-weight: 600;
  line-height: 5px;
  letter-spacing: 0em;
  color: ${(props) => (props.$isOpen ? "#008080" : "")};
  gap: 12px;

  span {
    transition: all 0.1s ease-in-out;
  }

  .imageContainer {
    height: 22px;
    width: 22px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;

    .imageContainer {
      height: 19px;
      width: 19px;
    }
  }

  .placeholder {
    color: #a5a5a5;
  }

  .arrow {
    height: 100%;
    transition: all 0.1s;
    cursor: pointer;
    pointer-events: none;
    /* position: absolute; */
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => (theme as any).formInput?.color};
    margin-right: 10px;
  }
`;

export const SelectOptions = styled.div<{ open?: boolean }>`
  padding-top: 10px;
  padding-bottom: 15px;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  max-height: 200px;
  margin-left: -1px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => (theme as any).formInput?.borderColor};
  border-radius: 5px;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => (theme as any).formInput?.menuBg};
  transition: all 0.4s;
  color: ${({ theme }) => (theme as any).formInput?.menuTx};
`;

export const Option = styled.div<{ selected?: boolean }>`
  width: 97%;
  border-radius: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: Sora;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: ${(props) =>
    props.selected
      ? ({ theme }) => (theme as any).formInput?.optionHoverTx
      : ({ theme }) => (theme as any).formInput?.menuTx};
  padding: 3px 10px;
  gap: 5px;
  background: ${(props) =>
    props.selected
      ? ({ theme }) => (theme as any).formInput?.optionHoverBg
      : "transparent"};

  &:hover {
    background: ${({ theme }) => (theme as any).formInput?.optionHoverBg};
    color: ${({ theme }) => (theme as any).formInput?.optionHoverTx};
  }

  .imageContainer {
    height: 20px;
    width: 20px;
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
