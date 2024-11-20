import React from "react";
import SubmitBtn from "./buttons/submit";
import SubmitBtnSM from "./buttons/submitSM";
import CancelBtn from "./buttons/cancel";
import StillBtn from "./buttons/still";
import HallowBtn from "./buttons/hallow";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> & {
  submitBtn: React.FC<SubmitBtnProps>;
  submitBtnSM: React.FC<SubmitBtnProps>;
  cancelBtn: React.FC<SubmitBtnProps>;
  stillBtn: React.FC<SubmitBtnProps>;
  hallowBtn: React.FC<SubmitBtnProps>;
} = ({ children }) => <>{children}</>;

interface SubmitBtnProps {
  type?: "submit" | "button" | "reset";
  isLoading?: boolean;
  action?: () => void;
  id?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

Button.submitBtn = ({
  type,
  isLoading,
  action,
  children,
  id,
  disabled,
}: SubmitBtnProps) => (
  <SubmitBtn
    type={type}
    isLoading={isLoading}
    action={action}
    id={id}
    disabled={disabled}
  >
    {children}
  </SubmitBtn>
);

Button.submitBtnSM = ({
  type,
  isLoading,
  action,
  children,
  id,
  disabled,
}: SubmitBtnProps) => (
  <SubmitBtnSM
    type={type}
    isLoading={isLoading}
    action={action}
    id={id}
    disabled={disabled}
  >
    {children}
  </SubmitBtnSM>
);

Button.cancelBtn = ({
  type,
  isLoading,
  action,
  children,
  id,
  disabled,
}: SubmitBtnProps) => (
  <CancelBtn
    type={type}
    isLoading={isLoading}
    action={action}
    id={id}
    disabled={disabled}
  >
    {children}
  </CancelBtn>
);

Button.stillBtn = ({
  type,
  isLoading,
  action,
  children,
  id,
  disabled,
}: SubmitBtnProps) => (
  <StillBtn
    type={type}
    isLoading={isLoading}
    action={action}
    id={id}
    disabled={disabled}
  >
    {children}
  </StillBtn>
);

Button.hallowBtn = ({
  type,
  isLoading,
  action,
  children,
  id,
  disabled,
}: SubmitBtnProps) => (
  <HallowBtn
    type={type}
    isLoading={isLoading}
    action={action}
    id={id}
    disabled={disabled}
  >
    {children}
  </HallowBtn>
);

export default Button;
