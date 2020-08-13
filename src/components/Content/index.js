import styled from 'styled-components';
import DefaultTheme from 'themes/defaultTheme';

const Content = styled.div`
  grid-area: content;
  background: ${DefaultTheme.colors.background};
  padding: 0 11em;
  margin-bottom: 40px;

  @media all and (max-width: 1024px) {
    padding: 0 5vw;
  }
`;

export default Content;
