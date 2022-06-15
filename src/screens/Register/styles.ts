import styled, { css } from 'styled-components/native';

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

export const Title = styled.Text`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      color: ${colors.shape};
      font-size: 18px;
    `;
  }}
`;

export const Header = styled.SafeAreaView`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      height: 113px;
      background-color: ${colors.primary};
      justify-content: center;
      align-items: center;
      padding-bottom: 18px;
    `;
  }}
`;

export const Content = styled.View`
  ${props => {
    const { theme } = props;
    const { metrics } = theme;

    return css`
      margin-top: ${metrics.doubleSpace * 1.5}px;
      padding-horizontal: ${metrics.doubleSpace}px;
    `;
  }}
`;
