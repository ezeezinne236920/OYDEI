import React from "react";
import { LabelInputWrapper, MyInput } from "./custom-input.style";

interface CustomInputProps {
  value: string | number | any;
  placeholder?: string;
  onChange?: any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;
  type?: string;
  name?: string;
  id?: string;
  label: string;
}

const LabelInput: React.FC<CustomInputProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  isError = false,
  errorMessage,
  type = "text",
  name,
  id,
  label,
}) => {
  return (
    <LabelInputWrapper>
      <MyInput $isError={isError}>
        <span className="label_inner">{label}</span>
        <input
          className="myInput border-transparent focus:border-transparent focus:ring-0"
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </MyInput>
      {isError && errorMessage ? <p className="error">{errorMessage}</p> : ""}
    </LabelInputWrapper>
  );
};

export default LabelInput;
