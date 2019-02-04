/**
 * Created by lilit on 2019-01-30.
 */

export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';


export const addContact = (contact) => dispatch => {
    return (
        dispatch({
            type: ADD_CONTACT,
            contact
        })
    )
};

export const editContact = (contact, index) => dispatch => {
    return (
        dispatch({
            type: EDIT_CONTACT,
            contact,
            index
        })
    )
};

export const removeContact = (contact) => dispatch => {
    return (
        dispatch({
            type: REMOVE_CONTACT,
            contact
        })
    )
};