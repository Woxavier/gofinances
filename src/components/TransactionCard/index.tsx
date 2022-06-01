import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Footer,
  Icon,
  Leftcontainer,
  TransactionDate,
  TransactionInfo,
  TransactionTitle,
  Value,
} from './styles';

export function TransactionCard() {
  return (
    <Container>
      <TransactionTitle>Desenvolvimento de site</TransactionTitle>
      <Value>R$ 12.000,00</Value>

      <Footer>
        <Leftcontainer>
          <Icon name="dollar-sign" size={20} />
          <TransactionInfo>Vendas</TransactionInfo>
        </Leftcontainer>

        <View>
          <TransactionDate>13/04/2020</TransactionDate>
        </View>
      </Footer>
    </Container>
  );
}
