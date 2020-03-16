import { createStore } from "redux";
import rootReducer from "../Reducer/index";
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;