import styled from "styled-components";

export const FileInputWrapper = styled.div<{ $display: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FileInput = styled.div<{ $isError?: boolean; $display: string }>`
  width: ${(props) => (props.$display === "profile" ? "170px" : "155.09px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${(props) => (props.$isError ? "2px solid red" : "")};

  &.isDragging {
    border: 2px solid #008080;
  }

  & input[type="file"] {
    display: none;
    width: auto;
  }

  .FileLabel {
    cursor: pointer;

    #uploadBtn {
      padding-inline: ${(props) =>
        props.$display === "profile" ? " 13px" : "8.5px"};
      padding-block: ${(props) =>
        props.$display === "profile" ? " 7px" : "7.5px"};
      border: 1px solid ${({ theme }) => (theme as any).stillBtn?.color};
      border-radius: 5px;
      background-color: transparent;
      background: transparent;
      pointer-events: none;
      margin-top: ${(props) =>
        props.$display === "profile" ? "25px" : "30px"};
    }
  }

  .icon_profile {
    width: 75.33px;
    height: 94.17px;
  }

  .icon_regular {
    width: 70.49px;
    height: 70.49px;
  }

  .container {
    width: ${(props) => (props.$display === "profile" ? "170px" : "155.09px")};
    height: ${(props) => (props.$display === "profile" ? "170px" : "155.09px")};
    border: ${(props) => (props.$display === "profile" ? "9999px" : "21.15px")};
    border: ${(props) =>
      props.$display === "profile"
        ? `1.76px solid ${({ theme }: any) => theme.modalBody?.cardBgBorder}`
        : ""};
    background-color: ${(props) =>
      props.$display === "profile"
        ? ({ theme }) => theme.modalBody?.cardBgBorder
        : ""};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    position: absolute;
  }

  .imageHolder {
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
  }
`;

export const FileInputSelected = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  padding-left: 12px;
  padding-block: 10px;
  border: 1px solid #8e8e8e;
  border-radius: 10px;

  &:hover {
    border: 1px solid #008080;
  }

  .file_Icon {
    /* color: #bbbbbb; */
    color: #308242;
  }

  .shape {
    max-width: 80%;
  }

  .Details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    font-family: Hanken Grotesk;
    font-size: 16px;
    font-weight: 600;
    line-height: 20.85px;

    span {
      color: #616161;
    }
  }

  .clear {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    font-family: Outfit;
    font-size: 10px;
    font-weight: 400;
    line-height: 12.6px;
    color: #d93e39;

    i {
      color: #343434;
    }
  }
`;

export const Error = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0%;
  margin-top: 3px;
  margin-left: 10px;
  font-family: Hanken Grotesk;
  font-size: 12px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #d93e39;
`;

export const FileControl = styled.div<{
  width?: string;
  height?: string;
  $marginX?: string;
  $marginY?: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  /* height: ${(props) => props.height}; */
  height: auto;
  margin-inline: ${(props) => (props.$marginX ? props.$marginX : "0")};
  margin-block: ${(props) => (props.$marginY ? props.$marginY : "0")};

  label:first-child {
    color: #4a4a4a;
    transition: all 0.1s ease-out;
    font-family: Hanken Grotesk;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    margin-bottom: 7px;
  }

  &:focus-within {
    label {
      color: #008080;
    }
  }

  @media (max-width: 500px) {
    label:first-child {
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      margin-bottom: 2.7px;
    }
  }
`;
