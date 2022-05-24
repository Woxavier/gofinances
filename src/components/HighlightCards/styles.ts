import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  ${props => {
    const { theme } = props;
    const { colors, metrics } = theme;

    return css`
      background-color: ${colors.shape};
      margin-right: ${metrics.doubleSpace}px;
      width: 300px;
      padding: ${metrics.doubleSpace}px;
      border-radius: ${metrics.halfSpace}px;
    `;
  }}
`;

export const TopContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 80px;
`;

export const CardValue = styled.Text`
  font-size: 32px;
`;

export const LastUpdate = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.text};
      font-size: 12px;
    `;
  }}
`;

export const ContentContainer = styled.View`
  ${props => {
    const { theme } = props;
    const { metrics } = theme;

    return css`
      margin-bottom: ${metrics.doubleSpace}px;
    `;
  }}
`;
export const Icon = styled(Feather)`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.success};
    `;
  }}
`;
