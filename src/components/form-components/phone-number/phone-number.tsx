import React, { useState } from "react";
import CountryCodeSelect from "./country-code";
import { NumberInputWrapper, MyInput } from "./phone-number.style";
import CountryCode from "./iso-country";

interface MyPhoneNumberInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  handleChange?: (name: string, value: string) => void;
  isError?: boolean;
  onBlur?: () => void;
  name?: string;
  id?: string;
  errorMessage?: string;
  value?: any;
}

const MyPhoneNumberInput: React.FC<MyPhoneNumberInputProps> = ({
  placeholder,
  onChange,
  handleChange,
  isError,
  onBlur,
  name,
  id,
  errorMessage,
}) => {
  const [code, setCode] = useState<string | undefined>();
  const [number, setNumber] = useState<string>("");
  const isNumber = /^[0-9]+$/;

  const handleNumberInput = (date: string) => {
    const recentInput = date.replace(code + " ", "");
    if (isNumber.test(recentInput) || recentInput === "") {
      setNumber(recentInput);
    }

    const phoneNumber = code + number;

    if (code && number) {
      if (onChange) {
        onChange(phoneNumber);
      }
      if (handleChange) {
        handleChange(name ? name : "", phoneNumber);
      }
    }
  };

  return (
    <NumberInputWrapper>
      <MyInput $isError={isError}>
        <CountryCodeSelect
          id="countryCode"
          name="countryCode"
          onChange={(code) => setCode(code)}
          value={code || ""}
          placeholder="__"
          options={CountryCode}
        />

        <input
          className="myInput border-transparent focus:border-transparent focus:ring-0"
          id={id}
          onBlur={onBlur}
          type="tel"
          autoComplete="tel"
          value={code ? code + " " + number : number || ""}
          onChange={(e) => handleNumberInput(e.target.value)}
          placeholder={placeholder}
        />
      </MyInput>

      {isError && errorMessage ? <p className="error">{errorMessage}</p> : ""}
    </NumberInputWrapper>
  );
};

export default MyPhoneNumberInput;
