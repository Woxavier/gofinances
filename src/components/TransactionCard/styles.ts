import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  ${props => {
    const { theme } = props;
    const { metrics, colors } = theme;

    return css`
      margin-top: ${metrics.doubleSpace}px;
      background-color: ${colors.shape};
      border-radius: ${metrics.halfSpace}px;
      padding: ${metrics.doubleSpace}px;
    `;
  }}
`;

export const TransactionTitle = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.text}
      font-size: 14px;
    `;
  }}
`;

export const Value = styled.Text`
  ${props => {
    const { theme } = props;
    const { metrics, colors } = theme;

    return css`
      margin-top: ${metrics.space}px;
      font-weight: bold;
      font-size: ${metrics.doubleSpace}px;
      color: ${colors.attention};
      margin-bottom: ${metrics.doubleSpace}px;
    `;
  }}
`;

export const Footer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TransactionInfo = styled.Text`
  ${props => {
    const { theme } = props;
    const { metrics, colors } = theme;

    return css`
      color: ${colors.text}
      margin-left: ${metrics.space}px;
    `;
  }}
`;

export const TransactionDate = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.text};
    `;
  }}
`;

export const Icon = styled(Feather)`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.text};
    `;
  }}
`;

export const Leftcontainer = styled.View`
  flex-direction: row;
`;
