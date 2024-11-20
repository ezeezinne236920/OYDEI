// import React, {
//     useRef,
//     forwardRef,
//     ChangeEventHandler,
//     FocusEventHandler,
// } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
// import { DatePickerWrapper, MyInput } from "./date-picker.style";
// import { Calender } from "../../icons/appIcons/utilities-icons"; // Replace with the actual path
// // import moment from "moment";

// interface CustomDatePickerProps {
//     value: Date | null | any;
//     placeholder?: string;
//     onChange?: (date: string) => void;
//     handleChange?: (nameOrId: string) => (date: string) => void;
//     isError?: boolean;
//     onBlur?: FocusEventHandler<HTMLInputElement>;
//     name?: string | any;
//     id?: string | any;
//     errorMessage?: string;
//     format?: string;
// }

// const CustomDatePicker = ({
//     value,
//     placeholder,
//     onChange,
//     handleChange,
//     isError,
//     onBlur,
//     name,
//     id,
//     errorMessage,
//     format = "dd MM yyyy",
// }: CustomDatePickerProps) => {
//     const handleDatePicker = (date: Date) => {
//         if (onChange) {
//             onChange(date.toISOString());
//         }
//         if (handleChange) {
//             console.log(date);
//             handleChange(name ? name : id)(date.toISOString());
//         }
//     };

//     interface InputProps {
//         value?: string;
//         onClick?: ChangeEventHandler<HTMLInputElement> | any;
//     }

//     const Input = forwardRef<HTMLInputElement, InputProps>(
//         function InputComponent({ value, onClick }, ref) {
//             return (
//                 <MyInput $isError={isError} onClick={onClick}>
//                     <input
//                         ref={ref}
//                         type="text"
//                         value={value}
//                         className="myInput border-transparent focus:border-transparent focus:ring-0"
//                         readOnly
//                         placeholder={placeholder}
//                     />
//                     <Calender width={24} height={24} />
//                 </MyInput>
//             );
//         }
//     );

//     const inputRef = useRef<HTMLInputElement>(null);

//     return (
//         <DatePickerWrapper>
//             <DatePicker
//                 id={id}
//                 dateFormat={format}
//                 name={name}
//                 onBlur={onBlur}
//                 placeholderText={placeholder}
//                 selected={value}
//                 onChange={handleDatePicker}
//                 customInput={<Input ref={inputRef} />}
//             />

//             {isError && errorMessage ? (
//                 <p className="error">{errorMessage}</p>
//             ) : (
//                 ""
//             )}
//         </DatePickerWrapper>
//     );
// };

// export default CustomDatePicker;
