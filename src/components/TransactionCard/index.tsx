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

export interface TransactionCardInterface {
  title: string;
  value: number;
  info: {
    iconName: string;
    transaction: string;
  };
  date: string;
}

export function TransactionCard(props: TransactionCardInterface) {
  const { title, value, info, date } = props;
  const formattedValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Container>
      <TransactionTitle>{title}</TransactionTitle>
      <Value value={value}>{formattedValue}</Value>

      <Footer>
        <Leftcontainer>
          <Icon name={info?.iconName} size={20} />
          <TransactionInfo>{info?.transaction}</TransactionInfo>
        </Leftcontainer>

        <View>
          <TransactionDate>{date}</TransactionDate>
        </View>
      </Footer>
    </Container>
  );
}
