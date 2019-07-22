import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import notes from "./notes";
import editor from "./editor";
import sidebar from "./sidebar";

export default combineReducers({
  alert,
  auth,
  notes,
  editor,
  sidebar
});
