import styled from 'styled-components';

const LoadMore = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  background: #666666;
  height: 50px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  width: 100%;

  :hover {
    background: #ff5500;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export default LoadMore;
