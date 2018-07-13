import { createStore } from 'redux'

const initialState = {
    contacts: []
}

// Action Creators => Send Action Objects:
export const addContact = contact => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

export const deleteContact = contact => {
    return {
        type: "DELETE_CONTACT",
        contact
    }
}

// Reducer:
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "DELETE_CONTACT":
            return {
                contacts: state.contacts.filter(contact => action.contact.name !== contact.name)
            }
        default:
            return state;
    }
}

const store = createStore(contactReducer);

store.subscribe(() => console.log(store.getState()));

export default store;