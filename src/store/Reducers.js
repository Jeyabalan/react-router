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
    GET_CONTACT_BY_ID,
} from './actions/Types';

const contactReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CONTACT_SUCCESSFUL:
            return {
                ...state,
                contact: [
                    ...action.payload
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
        case GET_CONTACT_BY_ID: {
            return {
                ...state,
                selectedContact: action.payload
            }
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    contactState: contactReducer,
})
