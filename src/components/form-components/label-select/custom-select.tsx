import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  CustomSelectContainer,
  CustomSelectValue,
  SelectOptions,
  Option,
  ImageHolder,
  Error,
  LabelInner,
  Display,
  Container,
} from "./custom-select.style";
import { ArrowDown } from "@/components/icons/utilities-icon";
import Image from "next/image";

interface OptionType {
  value: string;
  label: string;
  icon?: string;
}

interface CustomSelectProps {
  options: any[];
  value: string | undefined | any;
  placeholder: string;
  onChange?: (value: string) => void;
  handleChange?: any;
  isError?: boolean | any;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  name?: string;
  id?: string;
  errormessage?: string;
  background?: string;
  scrollToTop?: boolean;
  useBg?: boolean;
  label: string;
  icon?: any;
}

const LabelSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder,
  onChange,
  handleChange,
  isError,
  onBlur,
  name,
  id,
  errormessage,
  background,
  scrollToTop = false,
  useBg = false,
  label,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<string | null | any>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  const handleOptionClick = (option: OptionType) => {
    selectRef.current = option.value;
    if (onChange) {
      onChange(option.value);
    }
    if (handleChange) {
      handleChange(name || id)(option.value);
    }
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !menuRef.current?.contains(e.target as Node) &&
        !bodyRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
        if (menuRef.current && scrollToTop) {
          menuRef.current.scrollTop = 0;
        }
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <CustomSelectContainer
        tabIndex={0}
        onBlur={(e: any) => handleBlur(e)}
        id={id}
        className="My_select"
      >
        <CustomSelectValue
          className="displayValue"
          onClick={handleSelectClick}
          $isError={isError || false}
          $isOpen={isOpen}
          $background={background}
          $useBg={useBg}
          ref={bodyRef}
        >
          <Container>
            {icon && <span className="rightImage">{icon}</span>}
            <div className="flex flex-col">
              <LabelInner>{label}</LabelInner>
              <Display>
                {selectedOption ? (
                  <>
                    {selectedOption.image && (
                      <div className="imageContainer">
                        <ImageHolder>
                          <Image
                            src={selectedOption.image}
                            alt={selectedOption.label}
                          />
                        </ImageHolder>
                      </div>
                    )}
                    <span className="label">{selectedOption.label}</span>
                  </>
                ) : (
                  <span className="placeholder">{placeholder}</span>
                )}
              </Display>
            </div>
          </Container>

          <i
            className="arrow"
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            <ArrowDown width={14} height={10} />
          </i>
        </CustomSelectValue>

        <SelectOptions open={isOpen} ref={menuRef}>
          <Option
            selected={value === ""}
            onClick={() =>
              handleOptionClick({
                value: "",
                label: "",
              })
            }
          >
            <span> _ _</span>
          </Option>
          {options.map((option) => (
            <Option
              key={option.value}
              selected={value === option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.image && (
                <div className="imageContainer">
                  <ImageHolder>
                    <Image src={option.image} alt={option.label} />
                  </ImageHolder>
                </div>
              )}
              <span>{option.label}</span>
            </Option>
          ))}
        </SelectOptions>

        <select
          ref={selectRef}
          name={name}
          id={id}
          style={{ display: "none" }}
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onChange && onChange(e.target.value)
          }
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </CustomSelectContainer>

      {isError && <Error>{errormessage}!</Error>}
    </>
  );
};

export default LabelSelect;
