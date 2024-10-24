import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListContainer, ContactItem, StyledInput, StyledButton, EditButton, ContactListWrapper, RemoveButton, CancelButton } from './styles';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const ContactList: React.FC = () => {
    const contacts = useSelector((state: { contacts: Contact[] }) => state.contacts);
    const dispatch = useDispatch();

    const [editContact, setEditContact] = useState<Contact | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const removeContact = (id: number) => {
        dispatch({ type: 'REMOVE_CONTACT', payload: id });
    };

    const startEditing = (contact: Contact) => {
        setEditContact(contact);
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
    };

    const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editContact) {
        const updatedContact = { ...editContact, name, email, phone };
        dispatch({ type: 'EDIT_CONTACT', payload: updatedContact });
        cancelEdit();
        }
    };

    const cancelEdit = () => {
        setEditContact(null);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <ListContainer>
        <h2>Lista de Contatos</h2>
        <ContactListWrapper>
            {contacts.map(contact => (
            <ContactItem key={contact.id}>
                {contact.name} - {contact.email} - {contact.phone}
                <div>
                <EditButton onClick={() => startEditing(contact)}>Editar</EditButton>
                <RemoveButton onClick={() => removeContact(contact.id)}>Remover</RemoveButton>
                </div>
            </ContactItem>
            ))}
        </ContactListWrapper>
        {editContact && (
            <form onSubmit={handleEditSubmit}>
            <StyledInput
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <StyledInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <StyledInput
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <StyledButton type="submit">Salvar</StyledButton>
            <CancelButton type="button" onClick={cancelEdit}>Cancelar</CancelButton>
            </form>
        )}
        </ListContainer>
    );
};

export default ContactList;
