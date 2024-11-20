import React from "react";
import BubbleSlide from "../../loaders/bubbles/BubbleSlide";
import { CancelBtnWrapper } from "../button.style";

interface SubmitBtnProps {
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}

function randomId(): string {
  const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
  return `id_${randomString}`;
}

const CancelBtn: React.FC<SubmitBtnProps> = ({
  action,
  id = randomId(),
  type = "submit",
  children,
  isLoading = false,
  disabled = false,
}: SubmitBtnProps) => {
  const handleAction = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (action) {
      action(e);
    }
  };

  return (
    <CancelBtnWrapper
      type={type}
      id={id}
      disabled={disabled}
      onClick={handleAction}
      $isLoading={isLoading}
    >
      <div className="content">{children}</div>
      {isLoading && (
        <div className="loader">
          <BubbleSlide />
        </div>
      )}
    </CancelBtnWrapper>
  );
};

export default CancelBtn;
