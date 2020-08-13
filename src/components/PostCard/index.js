import React from "react";
import {
  PostListWrapper,
  PostListImageWrapper,
  PostTitle,
  PostDate,
  PostDomain,
} from "./styled";

const PostCard = ({ postObj }) => {
  return (
    <PostListWrapper>
      <PostListImageWrapper>
        <img src={postObj.thumb} alt="post thumbnail" />
      </PostListImageWrapper>
      <div>
        <PostTitle>{postObj.title}</PostTitle>
        <PostDate>{`enviado a ${postObj.createdSince}`}</PostDate>
        <PostDomain>{postObj.domain}</PostDomain>
      </div>
    </PostListWrapper>
  );
};

export default PostCard;
