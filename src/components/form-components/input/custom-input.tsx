import React from "react";
import { MyInput, InputWrapper } from "./custom-input.style";

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
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  isError = false,
  errorMessage,
  type = "text",
  name,
  id,
}) => {
  return (
    <InputWrapper>
      <MyInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        $isError={isError}
        placeholder={placeholder}
      />
      {isError && errorMessage ? <p className="error">{errorMessage}</p> : ""}
    </InputWrapper>
  );
};

export default CustomInput;
