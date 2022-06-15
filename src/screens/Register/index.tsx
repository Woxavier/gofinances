import React from 'react';
import { Input } from '../../components';
import { Container, Title, Header, Content } from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Content>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Content>
    </Container>
  );
}
