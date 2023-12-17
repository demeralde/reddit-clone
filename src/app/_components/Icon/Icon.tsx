import { type FC } from "react";

import { type IconProps } from "./types";
import { ICONS } from "./svg";
import { COLOR_MAP, SIZE_MAP } from "./constants";

const Icon: FC<IconProps> = ({ type, color, size = "default" }) => {
  const IconSVG = ICONS[type];
  const sizeValue = SIZE_MAP[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeValue}
      height={sizeValue}
      viewBox={`0 0 ${sizeValue} ${sizeValue}`}
      fill="none"
      className={`${COLOR_MAP[color]}`}
    >
      <IconSVG size={sizeValue} />
    </svg>
  );
};

export default Icon;
