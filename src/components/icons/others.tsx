import * as React from "react";
import { IconWrapper, IconWrapperTwo } from "./icon-wrapper";
// export const GoRight =()=>{}
export const GoRight = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => (
  <IconWrapperTwo
    width={width}
    height={height}
    viewBox="0 0 44 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8215 33.1605C17.6236 33.877 18.4434 33.7486 19.2455 33.0321C20.0475 32.3155 20.0475 31.599 19.2455 30.8824L5.61024 18.7013L41.7035 18.7013C42.5055 18.7013 43.3076 17.9847 43.3076 17.2682C43.3076 16.5516 42.5055 15.8351 41.7035 15.8351L5.61024 15.8351L19.2455 3.65389C19.2455 3.65389 20.0475 2.93735 20.0475 2.22081C20.0475 1.50427 20.0475 1.50427 19.2455 0.787729C19.2455 0.787729 18.4434 0.0711915 17.6413 0.0711915C16.8392 0.0711914 16.8392 0.0711876 16.0372 0.787729L-0.806334 15.8351C-0.806334 15.8351 -1.6084 16.5516 -1.6084 17.2682C-1.6084 17.9847 -1.6084 17.9847 -0.806334 18.7013L16.0372 33.7486L16.8215 33.1605Z"
      fill="currentColor"
    />
  </IconWrapperTwo>
);

export const CloseX = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <IconWrapper
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path d="M9 9L15 15" stroke={color} strokeLinecap="round" />
    <path d="M15 9L9 15" stroke={color} strokeLinecap="round" />
  </IconWrapper>
);
export const ColorlessPlus = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <IconWrapper
    width={width}
    height={height}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.86328 10.1118H17.9509"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.90625 18.5789V1.64478"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
export const Good = ({ width, height }: { width: number; height: number }) => (
  <IconWrapper
    width={width}
    height={height}
    viewBox="0 0 9 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 2.30039L3.8 5.10039L8 0.900391"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </IconWrapper>
);
export const DeleteIcon = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => (
  <IconWrapperTwo
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9999 4.48633C13.9866 4.48633 13.9666 4.48633 13.9466 4.48633C10.4199 4.13299 6.89994 3.99966 3.41328 4.35299L2.05328 4.48633C1.77328 4.51299 1.52661 4.31299 1.49994 4.03299C1.47328 3.75299 1.67328 3.51299 1.94661 3.48633L3.30661 3.35299C6.85328 2.99299 10.4466 3.13299 14.0466 3.48633C14.3199 3.51299 14.5199 3.75966 14.4933 4.03299C14.4733 4.29299 14.2533 4.48633 13.9999 4.48633Z"
      fill="currentColor"
    />
    <path
      d="M5.66675 3.81301C5.64009 3.81301 5.61342 3.81301 5.58009 3.80634C5.31342 3.75967 5.12675 3.49967 5.17342 3.23301L5.32009 2.35967C5.42675 1.71967 5.57342 0.833008 7.12675 0.833008H8.87342C10.4334 0.833008 10.5801 1.75301 10.6801 2.36634L10.8268 3.23301C10.8734 3.50634 10.6868 3.76634 10.4201 3.80634C10.1468 3.85301 9.88675 3.66634 9.84676 3.39967L9.70009 2.53301C9.60675 1.95301 9.58675 1.83967 8.88009 1.83967H7.13342C6.42675 1.83967 6.41342 1.93301 6.31342 2.52634L6.16009 3.39301C6.12009 3.63967 5.90675 3.81301 5.66675 3.81301Z"
      fill="currentColor"
    />
    <path
      d="M10.1401 15.1667H5.8601C3.53343 15.1667 3.4401 13.88 3.36676 12.84L2.93343 6.12672C2.91343 5.85338 3.12676 5.61338 3.4001 5.59338C3.6801 5.58005 3.91343 5.78672 3.93343 6.06005L4.36676 12.7734C4.4401 13.7867 4.46676 14.1667 5.8601 14.1667H10.1401C11.5401 14.1667 11.5668 13.7867 11.6334 12.7734L12.0668 6.06005C12.0868 5.78672 12.3268 5.58005 12.6001 5.59338C12.8734 5.61338 13.0868 5.84672 13.0668 6.12672L12.6334 12.84C12.5601 13.88 12.4668 15.1667 10.1401 15.1667Z"
      fill="currentColor"
    />
    <path
      d="M9.10672 11.5H6.88672C6.61339 11.5 6.38672 11.2733 6.38672 11C6.38672 10.7267 6.61339 10.5 6.88672 10.5H9.10672C9.38005 10.5 9.60672 10.7267 9.60672 11C9.60672 11.2733 9.38005 11.5 9.10672 11.5Z"
      fill="currentColor"
    />
    <path
      d="M9.66658 8.83301H6.33325C6.05992 8.83301 5.83325 8.60634 5.83325 8.33301C5.83325 8.05967 6.05992 7.83301 6.33325 7.83301H9.66658C9.93992 7.83301 10.1666 8.05967 10.1666 8.33301C10.1666 8.60634 9.93992 8.83301 9.66658 8.83301Z"
      fill="currentColor"
    />
  </IconWrapperTwo>
);
