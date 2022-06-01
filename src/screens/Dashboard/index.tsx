// Dependencies
import React, { useContext } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';
import { assets } from '../../assets';
import { HighLightCard, TransactionCard } from '../../components';

import {
  Container,
  Title,
  Header,
  UserImage,
  UserInfoContainer,
  SubTitle,
  UserContainer,
  PowerIcon,
  RightContainer,
  CardContainer,
  TransactionsContainer,
  ListTitle,
} from './styles';

export function Dashboard() {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle={'dark-content'} />
      <Header>
        <UserContainer>
          <RightContainer>
            <UserImage source={assets.user_image} />
            <UserInfoContainer>
              <Title>Olá,</Title>
              <SubTitle>Winicius</SubTitle>
            </UserInfoContainer>
          </RightContainer>

          <PowerIcon name="power" />
        </UserContainer>
      </Header>
      <CardContainer horizontal showsHorizontalScrollIndicator={false}>
        <HighLightCard
          lastTransaction="14 de Abril de 2021"
          title="Entrada"
          type="input"
          transactionValue="R$ 1900,00"
        />
        <HighLightCard
          lastTransaction="12 de Junho de 2022"
          title="Saída"
          type="output"
          transactionValue="R$ 1800,00"
        />
        <HighLightCard
          lastTransaction="14 de Abril de 2022"
          title="Total"
          type="total"
          transactionValue="R$ 1900,00"
        />
      </CardContainer>

      <TransactionsContainer>
        <ListTitle>Listagem</ListTitle>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </ScrollView>
      </TransactionsContainer>
    </Container>
  );
}
