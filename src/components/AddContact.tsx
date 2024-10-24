import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormContainer, StyledForm, StyledInput, StyledButton } from './styles';

const AddContact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newContact = { id: Date.now(), name, email, phone };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
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
            <StyledButton type="submit">Adicionar Contato</StyledButton>
        </StyledForm>
        </FormContainer>
    );
};

export default AddContact;
