import styled from 'styled-components';
import { defaultTheme } from 'themes';

const Content = styled.div`
  grid-area: content;
  background: ${defaultTheme.colors.background};
  padding: 0 11em;
  margin-bottom: 40px;

  @media all and (max-width: 1024px) {
    padding: 0 5vw;
  }
`;

export default Content;
