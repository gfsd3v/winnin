import styled from 'styled-components';

export const SpinWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SpinImage = styled.img`
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '120px'};
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
