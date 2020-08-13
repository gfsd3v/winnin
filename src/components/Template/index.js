import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme"

const Template = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "filter filter filter"
    "content content content";
  grid-template-rows: 85px 60px auto;
  grid-template-columns: 300px 1fr 15%;
  height: 100vh;
  width: 100%;
  margin: 0;
  font-family: ${DefaultTheme.font.primary}
`;

export default Template;
