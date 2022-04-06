import styled,  { css } from 'styled-components/native';

export const Container = styled.View`
  ${props => {
    const { theme } = props;
    const { colors } = theme;

    return css`
      flex: 1;
      justify-content: center;
      align-items: center;
      background-color: ${colors.secondary};
    `
  }}
`

export const Title = styled.Text`
  font-weight: bold;
  color: purple;
  font-size: 24px;
`