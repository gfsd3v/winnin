import React from 'react';
import SpinningLoader from 'components/SpinningLoader';
import { Button as StyledButton } from './styled';

const Button = ({ onClick, children, width, margin, active, loading }) => (
  <StyledButton active={active} margin={margin} width={width} onClick={onClick}>
    {loading ? <SpinningLoader size="30px" /> : children}
  </StyledButton>
);

export default Button;
