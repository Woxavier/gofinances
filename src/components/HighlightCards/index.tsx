import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from 'styled-components';

import {
  CardValue,
  Container,
  ContentContainer,
  Icon,
  LastUpdate,
  TopContainer,
} from './styles';

interface HiglightCardProps {
  title: string;
  type: 'input' | 'output' | 'total';
  transactionValue: string;
  lastTransaction: string;
}

export function HighLightCard(props: HiglightCardProps) {
  const { title, type, lastTransaction, transactionValue } = props;
  const { colors } = useContext(ThemeContext);

  function getIconValues() {
    if (type === 'input') {
      return { name: 'arrow-up-circle', color: colors.success };
    }
    if (type === 'output') {
      return { name: 'arrow-down-circle', color: colors.attention };
    } else {
      return { name: 'dollar-sign', color: colors.shape };
    }
  }

  const iconValues = getIconValues();
  return (
    <Container type={type}>
      <TopContainer>
        <Text style={{ color: type !== 'total' ? colors.title : colors.shape }}>
          {title}
        </Text>
        <Icon name={iconValues.name} size={40} color={iconValues.color} />
      </TopContainer>
      <ContentContainer>
        <CardValue type={type}>{transactionValue}</CardValue>
        <LastUpdate type={type}>{lastTransaction}</LastUpdate>
      </ContentContainer>
    </Container>
  );
}
