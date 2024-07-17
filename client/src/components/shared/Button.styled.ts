import styled from 'styled-components';

interface ButtonProps {
  $backgroundColor?: string;
  $color?: string;
  $hoverColor?: string;
}

const Button = styled.button<ButtonProps>`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${props => props.$backgroundColor ? props.theme.colors[props.$backgroundColor] : props.theme.colors.primary};
  color: ${props => props.$color ? props.$color : 'white'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.$hoverColor ? props.theme.colors[props.$hoverColor] : props.theme.colors.primaryDarker};
  }
`;

export default Button;