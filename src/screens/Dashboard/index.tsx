// Dependencies
import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';
import { assets } from '../../assets';

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
} from './styles';

export function Dashboard() {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <Header>
        <UserContainer>
          <RightContainer>
            <UserImage source={assets.user_image} />
            <UserInfoContainer>
              <Title>Olá,</Title>
              <SubTitle>Rodrigo</SubTitle>
            </UserInfoContainer>
          </RightContainer>

          <PowerIcon name="power" />
        </UserContainer>
      </Header>
    </Container>
  );
}
