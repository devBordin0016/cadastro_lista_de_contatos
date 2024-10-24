import React from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { Container, Title } from './components/styles';

const App: React.FC = () => {
  return (
    <Container>
      <Title>Gerenciador de Contatos</Title>
      <AddContact />
      <ContactList />
    </Container>
  );
};

export default App;
