import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  ${props => {
    const { theme } = props;
    const { metrics, colors } = theme;

    return css`
      padding: ${metrics.doubleSpace}px;
      background-color: ${colors.shape};

      margin-bottom: ${metrics.space}px;
      color: ${colors.text};

      font-size: 14px;

      border-width: 1px;
      border-color: ${colors.shape};

      border-radius: 5px;
    `;
  }}
`;
