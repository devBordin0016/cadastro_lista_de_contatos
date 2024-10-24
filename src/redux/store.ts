import { createStore } from 'redux';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface State {
    contacts: Contact[];
}

const initialState: State = {
    contacts: [],
};

type Action =
    | { type: 'ADD_CONTACT'; payload: Contact }
    | { type: 'REMOVE_CONTACT'; payload: number }
    | { type: 'EDIT_CONTACT'; payload: Contact };

const contactReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'ADD_CONTACT':
        return { ...state, contacts: [...state.contacts, action.payload] };
        case 'REMOVE_CONTACT':
        return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
        case 'EDIT_CONTACT':
        return {
            ...state,
            contacts: state.contacts.map(contact =>
            contact.id === action.payload.id ? action.payload : contact
            ),
        };
        default:
        return state;
    }
};

const store = createStore(contactReducer);

export default store;
