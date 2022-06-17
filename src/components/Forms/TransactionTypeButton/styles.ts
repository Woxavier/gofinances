import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

interface IconInterface {
  type: 'down' | 'up';
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<IconInterface>`
  ${props => {
    const { theme, isActive, type } = props;
    const { colors } = theme;

    return css`
      border: 1px solid ${colors.text};
      ${isActive &&
      type === 'down' &&
      css`
        background-color: ${colors.attention_light};
      `}

      ${isActive &&
      type === 'up' &&
      css`
        background-color: ${colors.sucess_light};
      `}
      width: 48%;
      flex-direction: row;
      padding: 16px;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

export const Icon = styled(Feather)<IconInterface>`
  ${props => {
    const { theme, type } = props;
    const { metrics, colors } = theme;

    return css`
      margin-right: ${metrics.doubleSpace}px;
      color: ${type === 'down' ? colors.attention : colors.success};
    `;
  }}
`;

export const Title = styled.Text`
  font-size: 14px;
`;
