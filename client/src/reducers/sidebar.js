import { SWITCH_SIDEBAR_VISIBLITY } from "../actions/types";

const initialState = {
  isSidebarActive: true
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SWITCH_SIDEBAR_VISIBLITY: {
      return {
        isSidebarActive: !state.isSidebarActive
      };
    }
    default: {
      return { ...state };
    }
  }
};
