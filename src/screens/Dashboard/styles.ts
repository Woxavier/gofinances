import styled, { css } from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      flex: 1;
      background-color: ${colors.background};
    `;
  }}
`;

export const CardContainer = styled.ScrollView`
  ${props => {
    const { theme } = props;
    const { metrics } = theme;

    return css`
      flex: 1;
      padding-left: ${metrics.doubleSpace}px;
      padding-right: ${metrics.doubleSpace}px;
      flex-direction: row;
      position: absolute;
      margin-top: 45%;
    `;
  }}
`;

export const Header = styled.View`
  ${props => {
    const { theme } = props;
    const { colors, metrics } = theme;

    return css`
      width: 100%;
      padding: ${metrics.doubleSpace}px;
      padding-top: ${getStatusBarHeight() + 50}px;
      height: ${RFPercentage(42)}px;

      background-color: ${colors.primary};
    `;
  }}
`;

export const UserImage = styled.Image`
  height: ${RFValue(55)}px;
  width: ${RFValue(55)}px;

  border-radius: 10px;
`;

export const Title = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.background};
      font-size: 18px;
      line-height: 24px;
    `;
  }}
`;

export const SubTitle = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      font-weight: bold;
      color: ${colors.background};
      font-size: 18px;
      line-height: 24px;
    `;
  }}
`;

export const UserInfoContainer = styled.View`
  ${props => {
    const { theme } = props;
    const { metrics } = theme;

    return css`
      margin-left: ${metrics.doubleSpace}px;
      justify-content: center;
    `;
  }}
`;

export const UserContainer = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const PowerIcon = styled(Feather)`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.attention};
      font-size: 24px;
    `;
  }}
`;

export const RightContainer = styled.View`
  flex-direction: row;
`;

export const TransactionsContainer = styled.View`
  ${props => {
    const { theme } = props;
    const { metrics } = theme;

    return css`
      flex: 1;
      padding: ${metrics.doubleSpace}px;
      margin-top: 10%;
    `;
  }}
`;

export const ListTitle = styled.Text`
  ${props => {
    const { theme } = props;
    const { metrics, colors } = theme;

    return css`
      color: ${colors.title};
      margin-top: ${metrics.doubleSpace * 2}px;
      margin-bottom: ${metrics.space}px;
      font-size: ${metrics.doubleSpace}px;
    `;
  }}
`;
