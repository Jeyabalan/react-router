import { combineReducers } from 'redux';
import { initialState } from '../store/Store';
import {
    CREATE_CONTACT_FAILURE,
    CREATE_CONTACT_SUCCESSFUL,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_SUCCESSFUL,
    EDIT_CONTACT_FAILURE,
    EDIT_CONTACT_SUCCESSFUL,
    GET_CONTACT_FAILURE,
    GET_CONTACT_SUCCESSFUL,
} from './actions/Types';

const contactReducer = (state = initialState.contactState, action) => {
    switch (action.type) {
        case GET_CONTACT_SUCCESSFUL:
            return {
                ...state,
                contact: [
                    ...state.contact,
                    ...action.paload,
                ],
            };
        case GET_CONTACT_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case DELETE_CONTACT_SUCCESSFUL:
            return {
                ...state,
                error: action.error,
            };
        case DELETE_CONTACT_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case EDIT_CONTACT_SUCCESSFUL:
            return {
                ...state,
                error: action.error,
            };
        case EDIT_CONTACT_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case CREATE_CONTACT_SUCCESSFUL:
            return {
                ...state,
                error: action.error,
            };
        case CREATE_CONTACT_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    contactState: contactReducer,
})
