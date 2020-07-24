import { createStore } from "redux";
import reducer from "../reducer/meeting";

const store = createStore(reducer);

export { store };
