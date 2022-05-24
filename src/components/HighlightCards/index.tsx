import React from 'react';
import { Text } from 'react-native';

import {
  CardValue,
  Container,
  ContentContainer,
  Icon,
  LastUpdate,
  TopContainer,
} from './styles';

export function HighLightCard() {
  return (
    <Container>
      <TopContainer>
        <Text>Entradas</Text>
        <Icon name="arrow-up-circle" size={40} />
      </TopContainer>
      <ContentContainer>
        <CardValue>R$ 17.400,00</CardValue>
        <LastUpdate>Última entrada em 13 de Abril</LastUpdate>
      </ContentContainer>
    </Container>
  );
}
