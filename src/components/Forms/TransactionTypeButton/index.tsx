import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

interface TransactionTypeButton extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransationTypeButton(props: TransactionTypeButton) {
  const { type, title } = props;
  const iconType = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
  };

  return (
    <Container {...props}>
      <Icon size={24} name={iconType[type]} type={type} />

      <Title>{title}</Title>
    </Container>
  );
}
