import React, { ReactNode, SetStateAction, useState } from "react";
// import { Good } from './icons/appIcons/test_icon'
import { Good } from "./icons/others";
export const ToggleButton = ({
  className,
  buttonBg,
}: {
  className?: string;
  buttonBg?: string;
}) => {
  const [toggleOnlineMode, setToggleOnlineMode] = useState(false);
  return (
    <button
      className={`w-[34px] h-[18px] rounded-[78px] flex justify-between text-center   ${
        toggleOnlineMode ? "  bg-primary-blue " : " bg-input-color"
      } items-center`}
    >
      <div
        className={`w-[14px] h-[14px] rounded-full ${className}  flex items-center transition-transform duration-700 ease-in-out transform justify-center text-center  ${
          toggleOnlineMode
            ? "translate-x-[19px] bg-primary-blue "
            : "translate-x-0 bg-input-color"
        } `}
        onClick={() => setToggleOnlineMode(!toggleOnlineMode)}
      ></div>
    </button>
  );
};

// export default ToggleButton
interface SelectedI {
  className: string;
  agree: boolean;
  setAgree: React.Dispatch<SetStateAction<boolean>>;
}
export const SelectedItems = ({ className, agree, setAgree }: SelectedI) => {
  const [tickedItems, setTickedItems] = useState(false);

  return (
    <>
      {" "}
      <button
        className={`min-w-[24px] h-[24px] flex items-center text-center justify-center   border-input-color rounded-[5px] ${
          agree ? "bg-primary-blue" : "bg-transparent border-[1.5px]"
        }`}
        onClick={() => setAgree(!agree)}
      >
        {agree && (
          <i className="text-dashboardBg">
            <Good width={12} height={12} />
          </i>
        )}
      </button>
    </>
  );
};
export const SelectedRoundedItems = () => {
  const [tickedItems, setTickedItems] = useState(false);
  return (
    <>
      {" "}
      <button
        className={`w-[24px] h-[24px] flex items-center text-center justify-center mt-[2px]  border-input-color rounded-full  ${
          tickedItems
            ? "border-primary-blue border-[6px]"
            : "bg-transparent border-[1.5px]"
        }`}
        onClick={() => setTickedItems(!tickedItems)}
      ></button>
    </>
  );
};
export const ColoredSelect = ({
  bgColor,
  children,
}: {
  bgColor?: string;
  children: ReactNode;
}) => {
  const [bgClick, setBgClick] = useState(false);
  return (
    <>
      {" "}
      <button
        className={`flex flex-col ${
          bgClick
            ? " rounded-[5px] bg-light-blue px-[23px] py-[4px]"
            : "bg-transparent"
        } justify-center items-center text-center`}
        onFocus={() => {
          // setBgClick(!bgClick)
          setBgClick((btn) => !btn);
        }}
      >
        {children}
      </button>
    </>
  );
};
