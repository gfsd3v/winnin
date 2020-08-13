import React from 'react';
import { Button as StyledButton } from './styled';

const Button = ({ onClick, children, width, margin, active }) => (
  <StyledButton active={active} margin={margin} width={width} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
