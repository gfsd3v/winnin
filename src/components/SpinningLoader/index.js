import React from 'react';
import { SpinWrapper, SpinImage } from './styled';

const SpinningLoader = ({ size }) => (
  <SpinWrapper>
    <SpinImage
      size={size}
      src="https://image.winudf.com/v2/image/Y29tLndpbm5pbl9pY29uXzI1NzY4ZTd3/icon.png?w=170&fakeurl=1"
    />
  </SpinWrapper>
);

export default SpinningLoader;
