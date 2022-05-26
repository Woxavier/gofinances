import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface TransactionTypeInterface {
  type: 'input' | 'output' | 'total';
}

export const Container = styled.View<TransactionTypeInterface>`
  ${props => {
    const { theme, type } = props;
    const { colors, metrics } = theme;

    return css`
      background-color: ${type === 'total' ? colors.attention : colors.shape};
      margin-right: ${metrics.doubleSpace}px;
      height: 100%;
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

export const CardValue = styled.Text<TransactionTypeInterface>`
  ${props => {
    const { theme, type } = props;
    const { colors } = theme;

    return css`
      font-size: 32px;
      color: ${type !== 'total' ? colors.title : colors.shape};
    `;
  }}
`;

export const LastUpdate = styled.Text<TransactionTypeInterface>`
  ${props => {
    const { theme, type } = props;
    const { colors } = theme;

    return css`
      color: ${type !== 'total' ? colors.title : colors.shape};
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

export const Icon = styled(Feather)``;
