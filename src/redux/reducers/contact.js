/**
 * Created by lilit on 2019-01-30.
 */

import {ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT} from '../actions/contact';


export const contacts = (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.contact];
        case EDIT_CONTACT:
            return state.map((contact, index) => {
                if (index !== action.index) {
                    return contact
                }
                return {
                    ...contact,
                    ...action.contact
                }
            });
        case REMOVE_CONTACT:
            return state.filter(contact => contact !== action.contact);
        default :
            return state
    }
};

