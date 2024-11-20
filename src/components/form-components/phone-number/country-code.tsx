import React, { useState, useEffect, useRef } from "react";
import {
  CustomSelectContainer,
  CustomSelectValue,
  SelectOptions,
  Option,
} from "./country";
import { ArrowDown } from "@/components/icons/utilities-icon";

interface Country {
  name: string;
  code: string;
  flag: string;
  phoneCode: string;
}

interface Props {
  options: Country[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  handleChange?: (name: string) => (value: string) => void;
  isError?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  name?: string;
  id?: string;
}

function CountryCodeSelect({
  options,
  value,
  placeholder,
  onChange,
  handleChange,
  isError = false,
  onBlur,
  name,
  id,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.phoneCode === value);

  const handleOptionClick = (option: Country) => {
    selectRef.current!.value = option.phoneCode;
    if (onChange) {
      onChange(option.phoneCode);
    }
    if (handleChange) {
      handleChange(name ? name : id!)(option.phoneCode);
    }
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (onBlur) {
      onBlur(e);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        bodyRef.current &&
        !bodyRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  function uniqueID(baseID: string, index: number): string {
    return `${baseID}${index}`;
  }

  return (
    <CustomSelectContainer tabIndex={0} onBlur={handleBlur} id={id}>
      <CustomSelectValue
        onClick={handleSelectClick}
        $isOpen={isOpen}
        ref={bodyRef}
      >
        {selectedOption ? (
          <>
            <span>{selectedOption.flag}</span>
          </>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
        <i
          className="arrow"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ArrowDown width={10} height={10} />
        </i>
      </CustomSelectValue>

      <SelectOptions open={isOpen} ref={menuRef}>
        {options.map((option, index) => (
          <Option
            key={uniqueID(option.code, index)}
            selected={value === option.phoneCode}
            onClick={() => handleOptionClick(option)}
          >
            <span>
              {option.flag} {option.name}
            </span>
          </Option>
        ))}
      </SelectOptions>

      <select
        ref={selectRef}
        name={name}
        id={id}
        style={{ display: "none" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.phoneCode}>
            {option.code}
          </option>
        ))}
      </select>
    </CustomSelectContainer>
  );
}

export default CountryCodeSelect;
