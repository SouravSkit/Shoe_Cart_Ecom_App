import {combineReducers } from "redux";
import cartReducer from "./CartReducer";

const shoeCartReducer = combineReducers({

    counter: cartReducer()
})

export default shoeCartReducer;
