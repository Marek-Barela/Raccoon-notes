import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import notes from "./notes";
import editor from "./editor";

export default combineReducers({
  alert,
  auth,
  notes,
  editor
});
