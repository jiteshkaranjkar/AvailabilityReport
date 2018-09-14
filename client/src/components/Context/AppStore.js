import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
