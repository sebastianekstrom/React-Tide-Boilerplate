import { Tide, initActions, logging } from "tide";

import State from "./state";
import AppActions from "./actions/app";

export default function create() {
  const tide = new Tide();
  tide.setState(new State());
  initActions(tide, { app: AppActions });

  if (process.env.REACT_APP_ENVIROMENT === "development") {
    logging(tide, { actions: true, state: true, components: false });
  }

  return tide;
}
