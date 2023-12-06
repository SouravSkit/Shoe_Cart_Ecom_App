import { createStore } from "redux";
import shoeCartReducer from "./reducers";

const store = createStore(
    shoeCartReducer
    )
    export default store;