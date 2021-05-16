import Contact from '../../services/Contact';
import {
    CREATE_CONTACT_FAILURE,
    CREATE_CONTACT_SUCCESSFUL,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_SUCCESSFUL,
    EDIT_CONTACT_FAILURE,
    EDIT_CONTACT_SUCCESSFUL,
    GET_CONTACT_BY_ID,
    GET_CONTACT_FAILURE,
    GET_CONTACT_SUCCESSFUL,
} from './Types';

const errorHandler = (error, dispatch, type) => {
    dispatch({
        type,
        error,
    });
}

export const getAllContacts = () => async (dispatch) => {
    Contact.getAllConactDetails().then((response) => {
        dispatch({
            type: GET_CONTACT_SUCCESSFUL,
            payload: response.data
        });
    }, (error) => errorHandler(error, dispatch, GET_CONTACT_FAILURE));
}

export const addContact = (payload) => async (dispatch) => {
    Contact.addContactDetail(payload).then((response) => {
        dispatch({
            type: CREATE_CONTACT_SUCCESSFUL,
            payload: response.data
        });
    }, (error) => errorHandler(error, dispatch, CREATE_CONTACT_FAILURE));
}

export const updateContact = (id, payload) => async (dispatch) => {
    Contact.updateContactDetail(id, payload).then((response) => {
        dispatch({
            type: EDIT_CONTACT_SUCCESSFUL,
            payload: response.data
        });
    }, (error) => errorHandler(error, dispatch, EDIT_CONTACT_FAILURE));
}

export const deleteContact = (id) => async (dispatch) => {
    Contact.deleteContactDetail(id).then((response) => {
        dispatch({
            type: DELETE_CONTACT_SUCCESSFUL,
            payload: response.data
        });
    }, (error) => errorHandler(error, dispatch, DELETE_CONTACT_FAILURE));
}

export const getContactById = (payload) => async (dispatch) => {
    Contact.getContactById(payload.id).then((response) => {
        dispatch({
            type: GET_CONTACT_BY_ID,
            payload: response.data
        });
    }, (error) => errorHandler(error, dispatch, DELETE_CONTACT_FAILURE));
}