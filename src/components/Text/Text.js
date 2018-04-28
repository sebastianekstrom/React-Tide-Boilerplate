import React from "react";
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
  fontSizeXL,
  lineHeightXS,
  lineHeightS,
  lineHeightM,
  lineHeightL,
  lineHeightXL
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

export function sizeToLineHeight(size) {
  const sizeToLineHeight = {
    xs: lineHeightXS,
    s: lineHeightS,
    m: lineHeightM,
    l: lineHeightL,
    xl: lineHeightXL
  };
  return sizeToLineHeight[size];
}

const StyledText = styled(Box)`
  font-family: ${fontFamily};
  font-weight: ${props => propToWeight[props.weight]};
  font-size: ${props => propToSize(props.size)}px;
  -webkit-font-smoothing: antialiased;
  ${p => p.uppercase && `text-transform: uppercase`};
  line-height: ${props => sizeToLineHeight(props.size)};
  ${props => props.color && `color: ${color(...props.color)};`};
  ${p =>
    p.overflow !== "visible" &&
    `
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    ${p.overflow === "ellipsis" && "text-overflow: ellipsis"};
  `};
  ${p =>
    p.placeholderActive &&
    `
      color: transparent;
      background: ${color("gray")};
    `};
`;

const Text = props => {
  const passedProps = { ...props };
  if (props.placeholderText && !props.children) {
    passedProps.children = props.placeholderText;
    passedProps.placeholderActive = true;
  }
  return <StyledText {...passedProps} />;
};

Text.propTypes = {
  color: PropTypes.array,
  overflow: PropTypes.oneOf(["ellipsis", "hidden", "visible"]),
  placeholderText: PropTypes.string,
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf(["light", "regular", "semibold", "bold"])
};

Text.defaultProps = {
  size: "s",
  weight: "regular",
  component: "span",
  color: ["black"],
  overflow: "visible",
  inline: true,
  uppercase: false,
  placeholderText: null,
  passedProps: []
};

export default Text;
