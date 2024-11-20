import styled from "styled-components";

interface SubmitBtnWrapperProps {
  $isLoading?: boolean;
  disabled?: boolean;
}

export const SubmitBtnWrapper = styled.button<SubmitBtnWrapperProps>`
  padding-block: 18px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    !props.$isLoading && props.disabled
      ? ({ theme }) => theme.submitBtn?.disabled
      : ({ theme }) => theme.submitBtn?.bgColor};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => (theme as any).submitBtn?.hoverBg};
  }

  .content {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: ${(props) => (props.$isLoading ? "hidden" : "visible")};
    font-family: Sora;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.16px;
    letter-spacing: -0.30000001192092896px;
    color: ${({ theme }) => (theme as any).submitBtn?.color};
  }

  .loader {
    display: ${(props) => (props.$isLoading ? "flex" : "none")};
    position: absolute;
    margin: auto;
    z-index: 2;
  }

  @media (max-width: 500px) {
    padding: 12px 17px;
    padding-bottom: 15px;

    .content {
      gap: 4px;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
    }
  }
`;

export const SubmitBtnSMWrapper = styled.button<SubmitBtnWrapperProps>`
  padding-block: 11px;
  padding-inline: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    !props.$isLoading && props.disabled
      ? ({ theme }) => theme.submitBtn?.disabled
      : ({ theme }) => theme.submitBtn?.bgColor};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => (theme as any).submitBtn?.hoverBg};
  }

  .content {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: ${(props) => (props.$isLoading ? "hidden" : "visible")};
    font-family: Sora;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.64px;
    color: ${({ theme }) => (theme as any).submitBtn?.color};
  }

  .loader {
    display: ${(props) => (props.$isLoading ? "flex" : "none")};
    position: absolute;
    margin: auto;
    z-index: 2;
  }

  @media (max-width: 500px) {
    padding-block: 8px;
    padding-inline: 13px;

    .content {
      gap: 4px;
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
    }
  }
`;

export const CancelBtnWrapper = styled.button<SubmitBtnWrapperProps>`
  padding-block: 4px;
  padding-inline: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    !props.$isLoading && props.disabled
      ? ({ theme }) => theme.cancelBtn?.disabled
      : ({ theme }) => theme.cancelBtn?.bgColor};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease-in-out;

  .content {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: ${(props) => (props.$isLoading ? "hidden" : "visible")};
    color: ${({ theme }) => (theme as any).cancelBtn?.color};
    font-family: Sora;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.64px;
    letter-spacing: -0.30000001192092896px;
  }

  .loader {
    display: ${(props) => (props.$isLoading ? "flex" : "none")};
    position: absolute;
    margin: auto;
    z-index: 2;
  }

  @media (max-width: 500px) {
    padding-block: 4px;
    padding-inline: 10px;

    .content {
      gap: 4px;
      font-size: 11px;
    }
  }
`;

export const StillBtnWrapper = styled.button<SubmitBtnWrapperProps>`
  width: fit-content;
  padding-block: 10px;
  padding-inline: 24.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    !props.$isLoading && props.disabled
      ? ({ theme }) => theme.stillBtn?.disabled
      : ({ theme }) => theme.stillBtn?.bgColor};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease-in-out;
  border: 1px solid
    ${(props) =>
      !props.$isLoading && props.disabled
        ? "transparent"
        : ({ theme }) => theme.stillBtn?.borderColor};

  .content {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: ${(props) => (props.$isLoading ? "hidden" : "visible")};
    color: ${({ theme }) => (theme as any).stillBtn?.color};
    font-family: Sora;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.16px;
    letter-spacing: -0.30000001192092896px;
  }

  .loader {
    display: ${(props) => (props.$isLoading ? "flex" : "none")};
    position: absolute;
    margin: auto;
    z-index: 2;
  }

  @media (max-width: 500px) {
    padding-block: 8px;
    padding-inline: 20px;

    .content {
      gap: 4px;
      font-size: 13px;
    }
  }
`;

export const HallowBtnWrapper = styled.button<SubmitBtnWrapperProps>`
  width: fit-content;
  padding-block: 18px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    !props.$isLoading && props.disabled
      ? ({ theme }) => theme.hallowBtn?.disabled
      : ({ theme }) => theme.hallowBtn?.bgColor};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease-in-out;
  border: 1px solid
    ${(props) =>
      !props.$isLoading && props.disabled
        ? "transparent"
        : ({ theme }) => theme.hallowBtn?.borderColor};

  .content {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: ${(props) => (props.$isLoading ? "hidden" : "visible")};
    color: ${({ theme }) => (theme as any).hallowBtn?.color};
    font-family: Sora;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.16px;
    letter-spacing: -0.30000001192092896px;
  }

  .loader {
    display: ${(props) => (props.$isLoading ? "flex" : "none")};
    position: absolute;
    margin: auto;
    z-index: 2;

    #loader-4 span {
      background-color: ${({ theme }) => (theme as any).hallowBtn?.color};
    }
  }

  @media (max-width: 500px) {
    padding: 12px 17px;
    padding-bottom: 15px;

    .content {
      gap: 4px;
      font-size: 12px;
    }
  }
`;
