import React, { useState } from 'react';
import { Input, Button, TransationTypeButton } from '../../components';
import {
  Container,
  Title,
  Header,
  Content,
  Fields,
  TransactionTypeContainer,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState<string | undefined>();
  function handleTransactioTypeSelect(_transactionType: 'down' | 'up') {
    setTransactionType(_transactionType);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Content>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypeContainer>
            <TransationTypeButton
              isActive={transactionType === 'up'}
              onPress={() => handleTransactioTypeSelect('up')}
              title="Income"
              type="up"
            />
            <TransationTypeButton
              isActive={transactionType === 'down'}
              onPress={() => handleTransactioTypeSelect('down')}
              title="Outcome"
              type="down"
            />
          </TransactionTypeContainer>
        </Fields>

        <Button title="Enviar" />
      </Content>
    </Container>
  );
}
