import styled from 'styled-components';

export const Button = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  background: ${props => (props.active ? '#ff5500' : '#666666')};
  height: 35px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0'};

  :hover {
    background: #ff5500;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;
