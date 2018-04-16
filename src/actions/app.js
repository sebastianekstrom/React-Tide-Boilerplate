import { Actions } from "tide";

class AppActions extends Actions {
  load() {
    this.mutate("foobar", "baz");
  }
}

export default AppActions;
