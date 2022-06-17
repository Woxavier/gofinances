import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  ${props => {
    const { theme } = props;
    const { metrics, colors } = theme;

    return css`
      width: 100%;

      padding: ${metrics.doubleSpace}px;

      background-color: ${colors.secondary};
      border-radius: 5px;
      align-items: center;
    `;
  }}
`;

export const Title = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.shape};
      font-size: 14px;
    `;
  }}
`;
