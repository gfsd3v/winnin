import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

export const FilterWrapper = styled.div`
  grid-area: filter;
  background: ${DefaultTheme.colors.background};
  display: flex;
  justify-content: space-evenly;
  padding: 0 2vw;
  align-items: center;
`;

export const FilterButton = styled.div`
  background-color: ${(props) => (props.enable ? "#FF5500" : "#666666")};
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin: 0 40px;
  text-decoration: none;
  div {
    text-decoration: none;
    color: white;
  }
  :hover {
    background-image: linear-gradient(
      to right,
      #e7484f,
      #e7484f 16.65%,
      #f68b1d 16.65%,
      #f68b1d 33.3%,
      #fced00 33.3%,
      #fced00 49.95%,
      #009e4f 49.95%,
      #009e4f 66.6%,
      #00aac3 66.6%,
      #00aac3 83.25%,
      #732982 83.25%,
      #732982 100%,
      #e7484f 100%
    );
    animation: slidebg 2s linear infinite;
  }

  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }
`;
