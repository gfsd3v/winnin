import styled from 'styled-components';
import { defaultTheme } from 'themes';

export const PostListWrapper = styled.div`
  padding: 10px 0;
  border-top: 1px solid black;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 10px;
  font-size: 12px;

  :hover {
    background: ${defaultTheme.colors.hoverColor};
  }

  a {
    cursor: pointer;
    color: ${defaultTheme.colors.primary};
  }
`;

export const PostListImage = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props =>
    props.imageUrl || defaultTheme.colors.lightBlack});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export const PostTitle = styled.div`
  font-size: 16px;
  font-weight: bolder;
  margin: 0 0 5px;
  color: ${defaultTheme.colors.lightBlack};
  cursor: pointer;
`;

export const PostData = styled.div`
  font-size: 12px;
  margin: 0 0 5px;
  color: ${defaultTheme.colors.blackText};
`;

export const PostDomain = styled.div`
  display: inline-block;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${defaultTheme.colors.blackText};

  a {
    color: ${defaultTheme.colors.lightBlack};
  }
`;
