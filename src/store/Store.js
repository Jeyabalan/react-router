import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';

export const initialState = {
    contactState: {
        contact: [],
        loading: false,
        error: null,
    },
}
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)