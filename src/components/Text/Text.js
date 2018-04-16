import PropTypes from "prop-types";
import styled from "styled-components";

import Box from "../Box/Box";
import color from "../utils/color";

import {
  fontFamily,
  fontLight,
  fontRegular,
  fontSemiBold,
  fontBold,
  fontSizeXS,
  fontSizeS,
  fontSizeM,
  fontSizeL,
  fontSizeXL
} from "../config";

const propToWeight = {
  light: fontLight,
  regular: fontRegular,
  semibold: fontSemiBold,
  bold: fontBold
};

export function propToSize(size) {
  const propToSizeMap = {
    xs: fontSizeXS,
    s: fontSizeS,
    m: fontSizeM,
    l: fontSizeL,
    xl: fontSizeXL
  };
  return propToSizeMap[size];
}

const StyledText = styled(Box)`
  font-family: ${fontFamily};
  font-weight: ${props => propToWeight[props.weight]};
  font-size: ${props => propToSize(props.size)}px;
  -webkit-font-smoothing: antialiased;
  ${p => p.uppercase && "text-transform: uppercase"};
  line-height: 1.5em;
  ${props => props.color && `color: ${color(...props.color)};`};
  ${p =>
    p.overflow !== "visible" &&
    `
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    ${p.overflow === "ellipsis" && "text-overflow: ellipsis"};
  `};
`;

StyledText.propTypes = {
  color: PropTypes.array,
  overflow: PropTypes.oneOf(["ellipsis", "hidden", "visible"]),
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  weight: PropTypes.oneOf(["light", "regular", "semibold", "bold"])
};

StyledText.defaultProps = {
  size: "s",
  weight: "regular",
  component: "span",
  color: ["black"],
  overflow: "visible",
  inline: true,
  uppercase: false,
  placeholderText: null
};

export default StyledText;
