import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

const Text = styled.div`
  font-family: ${DefaultTheme.font.primary};
  font-weight: ${(props) => props.fontWight || "500"};
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.fontColor || DefaultTheme.colors.text};
`;

export default Text;
