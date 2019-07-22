import { SWITCH_SIDEBAR_VISIBLITY } from "./types";

export const switchSidebarView = () => dispatch => {
  dispatch({
    type: SWITCH_SIDEBAR_VISIBLITY
  });
}