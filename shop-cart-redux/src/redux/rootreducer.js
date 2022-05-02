import { combineReducer } from "redux";
import { productsReducer } from "./products/productsReducer";

export const rootReducer = combineReducer({
  productsState: productsReducer,
});
