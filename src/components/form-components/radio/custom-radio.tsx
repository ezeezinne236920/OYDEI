import React, { ChangeEvent } from "react";
import { Radio } from "./custom-radio.style";

interface Option {
  value: string;
  label: string;
}

interface CustomRadioProps {
  value: string | any;
  options: Option[];
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  isError?: boolean;
  errorMessage?: string;
  gap?: string;
}

function CustomRadio({
  value,
  options,
  name,
  onChange,
  onBlur,
  isError = false,
  errorMessage,
  gap = "50%",
}: CustomRadioProps) {
  function uniqueID(baseID: string, index: number): string {
    return `${baseID}_${index}radio`;
  }

  return (
    <Radio $isError={isError} $gap={gap}>
      <div className="radioBox">
        {options.map((option, index) => (
          <span key={index}>
            <input
              type="radio"
              id={uniqueID(option.value, index)}
              name={name}
              onChange={onChange}
              value={option.value}
              checked={option.value === value}
              onBlur={onBlur}
              className="text-[12px] md:text-[18px]"
            />
            <label
              className="mainLabel text-[12px] md:text-[18px]"
              htmlFor={uniqueID(option.value, index)}
            >
              <div className="check">
                <div className="inside" />
              </div>
              {option.label}
            </label>
          </span>
        ))}
      </div>
      {isError && errorMessage ? <p className="error">{errorMessage}</p> : ""}
    </Radio>
  );
}

export default CustomRadio;
