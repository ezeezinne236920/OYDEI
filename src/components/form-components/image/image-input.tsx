// import React, { useMemo, useState, useEffect, useRef } from "react";
// import {
//     FileInputWrapper,
//     FileInput,
//     FileInputSelected,
//     Error,
// } from "./image-input.style";
// import {
//     BadIcon,
//     ProfileFileIcon,
//     ImageFileIcon,
// } from "../../icons/appIcons/form";
// import Button from "../../button-components/index-button";

// interface CustomFileInputProps {
//     value?: File | File[];
//     onChange?: (value: File | File[] | null) => void;
//     setFieldValue?: (field: string, value: any) => void;
//     isError?: boolean;
//     onBlur?: (field: string) => void;
//     name?: string;
//     id?: string;
//     errorMessage?: string;
//     convertFunc?: (value: any) => any;
//     isSelected?: (state: string) => void;
//     accept?: string;
//     display?: "regular" | "profile";
//     text?: string;
// }

// const ImageUploader: React.FC<CustomFileInputProps> = ({
//     value,
//     onChange,
//     setFieldValue,
//     isError,
//     onBlur,
//     name,
//     id,
//     errorMessage,
//     convertFunc,
//     isSelected,
//     accept,
//     display = "regular",
//     text,
// }) => {
//     const myFileRef = useRef<HTMLDivElement | null>(null);
//     const inputRef = useRef<HTMLInputElement | null>(null);
//     const [fileState, setFileState] = useState<string>("unselected");
//     const [data, setData] = useState<File | File[] | null | any>(null);
//     const [touched, setTouched] = useState<boolean>(false);

//     function convertBits(bits: number) {
//         const KB = (bits / 8 / 1024).toFixed(2);
//         const MB = (Number(KB) / 1024).toFixed(2);
//         return { KB, MB };
//     }

//     useEffect(() => {
//         if (isSelected) {
//             isSelected(fileState);
//         }
//     }, [fileState, isSelected]);

//     const handleDragover = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         myFileRef.current?.classList.add("isDragging");
//     };

//     const handleDragleaveDragend = () => {
//         myFileRef.current?.classList.remove("isDragging");
//     };

//     const forward = (value: File | File[]) => {
//         const fileData = convertFunc ? convertFunc(value) : value;
//         setData(value);
//         if (onChange) {
//             onChange(fileData);
//         }
//         if (setFieldValue) {
//             setFieldValue(name ? name : id!, fileData);
//         }
//     };

//     const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files![0];
//         forward(file);

//         setFileState("selected");
//         if (onBlur) {
//             onBlur(name ?? id!);
//         }
//         setTouched(true);
//     };

//     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         if (e.dataTransfer.files.length) {
//             const file = e.dataTransfer.files[0];
//             inputRef.current!.files = new FileList();
//             forward(file);

//             setFileState("selected");
//             if (onBlur) {
//                 onBlur(name ?? id!);
//             }
//             setTouched(true);
//         }

//         myFileRef.current?.classList.remove("isDragging");
//     };

//     const handelClear = () => {
//         setFileState("unselected");
//         setData(null);
//         if (onChange) {
//             onChange(null);
//         }
//         if (setFieldValue) {
//             setFieldValue(name ? name : id!, null);
//         }
//     };

//     const fileDetails = useMemo(() => {
//         if (data) {
//             const fileSize = convertBits(data.size);
//             return {
//                 name: data.name,
//                 size: Number(fileSize.KB) >= 1000 ? fileSize.MB : fileSize.KB,
//                 unit: Number(fileSize.KB) >= 1000 ? "MB" : "KB",
//                 type: data.type,
//             };
//         }

//         return {
//             name: "No file",
//             size: 0,
//             unit: "KB",
//             type: "No type",
//         };
//     }, [data]);

//     return (
//         <FileInputWrapper $display={display}>
//             {fileState === "unselected" && (
//                 <FileInput
//                     id={id}
//                     ref={myFileRef}
//                     $isError={isError}
//                     $display={display}
//                     onDragOver={handleDragover}
//                     onDragLeave={handleDragleaveDragend}
//                     onDragEnd={handleDragleaveDragend}
//                     onDrop={handleDrop}
//                 >
//                     <input
//                         type="file"
//                         name={name}
//                         id="uploader-button"
//                         multiple={false}
//                         accept={accept}
//                         onChange={onChangeFile}
//                         ref={inputRef}
//                     />
//                     <div className="container">
//                         {display === "regular" ? (
//                             <i className="icon_profile">
//                                 <ProfileFileIcon width="100%" height="100%" />
//                             </i>
//                         ) : (
//                             <i className="icon_regular">
//                                 <ImageFileIcon width="100%" height="100%" />
//                             </i>
//                         )}
//                     </div>
//                     <label htmlFor="uploader-button" className="FileLabel">
//                         <Button.stillBtn id="uploadBtn">{text}</Button.stillBtn>
//                     </label>
//                 </FileInput>
//             )}
//             {fileState === "selected" && value ? (
//                 <FileInputSelected>
//                     {/* <div className="flex items-center shape">
//                         <i className="file_Icon">
//                             <SelectedFileIcon width={36} height={36} />
//                         </i>
//                         <div className="Details">
//                             <h3 className="overflow-x-auto">
//                                 {fileDetails.name}
//                             </h3>
//                             <span className="overflow-x-auto">
//                                 {fileDetails.size} {fileDetails.unit}
//                             </span>
//                         </div>
//                     </div> */}
//                     <div className="clear" onClick={handelClear}>
//                         <i className="isIcon">
//                             <BadIcon width={24} height={24} />
//                         </i>
//                         Clear
//                     </div>
//                 </FileInputSelected>
//             ) : (
//                 ""
//             )}
//             {isError && errorMessage && touched ? (
//                 <Error className="error">{errorMessage}</Error>
//             ) : (
//                 ""
//             )}
//         </FileInputWrapper>
//     );
// };

// export default ImageUploader;
