import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

const Content = styled.div`
  grid-area: content;
  background: ${DefaultTheme.colors.background};
  padding: 1.5em 11em;

  @media all and (max-width: 1024px) {
    padding: 1.5em 5vw;
  }
`;

export default Content;
