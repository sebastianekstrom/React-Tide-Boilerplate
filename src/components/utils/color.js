import { capitalize, chunk, memoize } from "lodash";
import * as uiConfig from "../config";

const color = (color, shade = "") => {
  const colorType = `color${capitalize(color)}${shade}`;
  return uiConfig[colorType];
};

export default color;
