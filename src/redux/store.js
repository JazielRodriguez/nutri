import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { changeLngReducer } from "./reducers/setLngReducer";

export const rootReducer = combineReducers({
    changeLngReducer: changeLngReducer // Change lng
});

const middleWare = []

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleWare))
)
