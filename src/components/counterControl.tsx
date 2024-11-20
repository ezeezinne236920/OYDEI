import React from "react";
import { BsDashLg } from "react-icons/bs";
import { ColorlessPlus } from "@/components/icons/others";

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center text-mainBody-text  justify-around sm:space-x-[22px]">
      <span
        className="hidden  cursor-pointer w-[30px] h-[30px] sm:flex items-center rounded-full border-[1px] border-input-color justify-center text-center"
        onClick={onDecrease}
      >
        <i className="text-mainBody-text">
          <BsDashLg size={15} />
        </i>
      </span>
      <span
        className="sm:hidden  cursor-pointer w-[30px] h-[30px] flex items-center rounded-full border-[1px] border-input-color justify-center text-center"
        onClick={onDecrease}
      >
        <i className="text-mainBody-text">
          <BsDashLg size={12} />
        </i>
      </span>
      <span className=" text-[17px] px-[15px]  text-mainBody-text sm:text-[20px]">
        {quantity}
      </span>
      {/* <span
        className="cursor-pointer w-[30px] h-[30px] text-modalBody.text flex items-center rounded-full border-[1px] border-input-color justify-center text-center"
        onClick={onIncrease}
      >
        <ColorlessPlus width={16} height={12} />
      </span> */}
      <span
        className="hidden  cursor-pointer w-[30px] h-[30px] sm:flex items-center rounded-full border-[1px] border-input-color justify-center text-center"
        onClick={onDecrease}
      >
        <i className="text-mainBody-text">
          <ColorlessPlus width={15} height={12} />
        </i>
      </span>
      <span
        className="sm:hidden  cursor-pointer w-[30px] h-[30px] flex items-center rounded-full border-[1px] border-input-color justify-center text-center"
        onClick={onDecrease}
      >
        <i className="text-mainBody-text">
          <ColorlessPlus width={13} height={9} />
        </i>
      </span>
    </div>
  );
};

export default QuantityControl;
