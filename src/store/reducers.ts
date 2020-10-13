import { combineReducers } from "redux";
import Modal from "./slices/modal";

const reducers = combineReducers({
    [Modal.name]: Modal.reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;