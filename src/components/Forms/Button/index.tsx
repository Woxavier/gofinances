import React from 'react';
import { Container, Title } from './style';

import { TouchableOpacityProps } from 'react-native';

interface ButtonInterface extends TouchableOpacityProps {
  title: string;
}

export function Button(props: ButtonInterface) {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
    </Container>
  );
}
