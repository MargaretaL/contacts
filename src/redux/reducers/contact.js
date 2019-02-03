/**
 * Created by lilit on 2019-01-30.
 */

import {ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT} from '../actions/contact';
/*
 export const contact = (state = {allContacts:[]}, action) => {
 switch (action.type) {
 case ADD_CONTACT:
 return {...state, allContacts: [...state.allContacts, action.contact]};
 default :
 return state
 }
 ...state.slice(0, action.index), ...state.slice(action.index + 1)
 };*/


export const contacts = (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.contact];
        case EDIT_CONTACT:
            return state.map((contact, index) => {
                if (index !== action.index) {
                    // This isn't the item we care about - keep it as-is
                    return contact
                }

                // Otherwise, this is the one we want - return an updated value
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

