import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

export const PostListWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 10px;
  cursor: pointer;

  :hover {
    background: #eee;
  }
`;

export const PostListImageWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const PostTitle = styled.div`
  font-size: 16px;
  font-weight: bolder;
  margin: 0 0 5px;
  color: black;
`;

export const PostDate = styled.div`
  font-size: 12px;
  margin: 0 0 5px;
  color: black;
`;

export const PostDomain = styled.div`
  display: inline-block;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: black;
`;
