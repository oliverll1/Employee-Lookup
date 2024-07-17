import styled from 'styled-components';

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  color: ${props => props.theme.colors.text};
  background-color: #fff;
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.primary};
`;

export default Input;