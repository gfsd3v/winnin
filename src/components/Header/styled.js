import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

export const HeaderWrapper = styled.div`
  grid-area: header;
  background: ${DefaultTheme.colors.lightPrimary};
  display: flex;
  padding: 1.2em;
  justify-content: center;
  align-items: center;
`;
