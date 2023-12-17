import { type IconSizeMap, type IconColorMap } from "./types";

/**
 * Manually map class names for compatibility with cssnano:
 */
export const COLOR_MAP: IconColorMap = {
  "gray-600": "stroke-gray-600",
  "gray-700": "stroke-gray-700",
  "gray-800": "stroke-gray-800",
  "primary-500": "stroke-primary-500",
  "primary-600": "stroke-primary-600",
};

export const SIZE_MAP: IconSizeMap = {
  small: 16,
  default: 20,
};
