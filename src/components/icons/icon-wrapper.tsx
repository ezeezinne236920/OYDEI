import styled from "styled-components";

interface IconWrapperProps {
  width: number;
  height: number;
  color?: string;
}

interface IconWrapperTwoProps {
  width: string;
  height: string;
  color?: string;
}

export const IconWrapper = styled.svg<IconWrapperProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  pointer-events: none;
`;

export const IconWrapperTwo = styled.svg<IconWrapperTwoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  pointer-events: none;
`;

//currentColor
