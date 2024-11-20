// import React, { useMemo, useState, useEffect, useRef } from "react";
// import {
//     FileInputWrapper,
//     FileInput,
//     FileInputSelected,
//     Error,
// } from "./custom-file-input.style";
// import {
//     FileDownloadIcon,
//     FileDownloadIconLg,
//     BadIcon,
//     SelectedFileIcon,
// } from "../../icons/appIcons/form";
// import Button from "../../button-components/index-button";

// interface CustomFileInputProps {
//     value?: File | File[];
//     onChange?: (value: File | File[] | null) => void;
//     setFieldValue?: (field: string, value: any) => void;
//     isMultiple?: boolean;
//     isError?: boolean;
//     onBlur?: (field: string) => void;
//     name?: string;
//     id?: string;
//     errorMessage?: string;
//     isModal?: boolean;
//     convertFunc?: (value: any) => any;
//     isSelected?: (state: string) => void;
//     accept?: string;
//     height?: string;
// }

// const CustomFileInput: React.FC<CustomFileInputProps> = ({
//     value,
//     onChange,
//     setFieldValue,
//     isMultiple = false,
//     isError,
//     onBlur,
//     name,
//     id,
//     errorMessage,
//     isModal = false,
//     convertFunc,
//     isSelected,
//     accept,
//     height = "234px",
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
//         if (isMultiple) {
//             const files = Array.from(e.target.files!);
//             forward(files);
//         } else {
//             const file = e.target.files![0];
//             forward(file);
//         }
//         setFileState("selected");
//         if (onBlur) {
//             onBlur(name ?? id!);
//         }
//         setTouched(true);
//     };

//     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         if (e.dataTransfer.files.length) {
//             if (isMultiple) {
//                 const files = Array.from(e.dataTransfer.files);
//                 inputRef.current!.files = new FileList();
//                 forward(files);
//             } else {
//                 const file = e.dataTransfer.files[0];
//                 inputRef.current!.files = new FileList();
//                 forward(file);
//             }
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
//         if (isMultiple && Array.isArray(data)) {
//             const total = data.reduce((sum, item) => sum + item.size, 0);
//             const fileSize = convertBits(total);
//             return {
//                 name: `${data.length} Files`,
//                 size: Number(fileSize.KB) >= 1000 ? fileSize.MB : fileSize.KB,
//                 unit: Number(fileSize.KB) >= 1000 ? "MB" : "KB",
//                 type: data[0]?.type,
//             };
//         }

//         if (!isMultiple && data) {
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
//     }, [data, isMultiple]);

//     return (
//         <FileInputWrapper height={height}>
//             {fileState === "unselected" && (
//                 <FileInput
//                     id={id}
//                     ref={myFileRef}
//                     $isError={isError}
//                     onDragOver={handleDragover}
//                     onDragLeave={handleDragleaveDragend}
//                     onDragEnd={handleDragleaveDragend}
//                     onDrop={handleDrop}
//                 >
//                     <input
//                         type="file"
//                         name={name}
//                         id="uploader-button"
//                         multiple={isMultiple}
//                         accept={accept}
//                         onChange={onChangeFile}
//                         ref={inputRef}
//                     />
//                     <div className="container">
//                         {isModal ? (
//                             <i className="icon">
//                                 <FileDownloadIcon width={48} height={48} />
//                             </i>
//                         ) : (
//                             <i className="iconLg">
//                                 <FileDownloadIconLg width={90} height={90} />
//                             </i>
//                         )}
//                         {isModal ? (
//                             <>
//                                 <p className="FileText mt-[3px]">
//                                     Drag file to upload
//                                 </p>
//                                 <span className="FileSubText">
//                                     <i></i> or select file <i></i>
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <p className="FileTextLg mt-[6px]">
//                                     Drag file to upload
//                                 </p>
//                                 <span className="FileSubTextLg">
//                                     <i></i> or select file <i></i>
//                                 </span>
//                             </>
//                         )}
//                     </div>
//                     <label htmlFor="uploader-button" className="FileLabel">
//                         {isModal ? (
//                             <Button.stillBtn id="FillBtn">
//                                 Upload File
//                             </Button.stillBtn>
//                         ) : (
//                             <Button.hallowBtn id="FillBtnLg">
//                                 Upload File
//                             </Button.hallowBtn>
//                         )}
//                     </label>
//                 </FileInput>
//             )}
//             {fileState === "selected" && value ? (
//                 <FileInputSelected>
//                     <div className="flex items-center shape">
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
//                     </div>
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

// export default CustomFileInput;
