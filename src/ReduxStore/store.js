import { legacy_createStore  , combineReducers} from "redux";
import ProductReducer from "./Reducers/ProductReducer";
import CategoryReducer from "./Reducers/CategoryReducer";
import rootReducer from "./Reducers/RootReducer";


export const store = legacy_createStore(
    ProductReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );