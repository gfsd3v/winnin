import React from 'react';
import { Button as StyledButton } from './styled';

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
