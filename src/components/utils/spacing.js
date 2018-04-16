import {
  spacingXXS,
  spacingXS,
  spacingS,
  spacingM,
  spacingL,
  spacingXL,
  spacingXXL
} from "../config";

const spacings = {
  xxs: spacingXXS,
  xs: spacingXS,
  s: spacingS,
  m: spacingM,
  l: spacingL,
  xl: spacingXL,
  xxl: spacingXXL
};

export const spacing = variable => spacings[variable] || 0;
export const spacingPx = variable => {
  const value = spacing(variable);
  return value ? `${value}px` : "0";
};

export const spacingShorthand = (spacing = {}) =>
  [
    spacingPx(spacing.top || spacing.vertical || spacing.all),
    spacingPx(spacing.right || spacing.horizontal || spacing.all),
    spacingPx(spacing.bottom || spacing.vertical || spacing.all),
    spacingPx(spacing.left || spacing.horizontal || spacing.all)
  ].join(" ");
