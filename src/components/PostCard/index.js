import React from 'react';
import {
  PostListWrapper,
  PostListImage,
  PostTitle,
  PostData,
  PostDomain,
} from './styled';

const PostCard = ({ postObj }) => (
  <PostListWrapper>
    <PostListImage imageUrl={postObj.thumb} />
    <div>
      <PostTitle onClick={() => window.open(postObj.postUrl, '_blank')}>
        {postObj.title}
      </PostTitle>
      <PostData>
        {`enviado ha ${postObj.createdSince} `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={postObj.authorProfileUrl}
        >
          {postObj.author}
        </a>
      </PostData>
      <PostDomain>
        <a target="_blank" rel="noopener noreferrer" href={postObj.url}>
          {postObj.domain}
        </a>
      </PostDomain>
    </div>
  </PostListWrapper>
);

export default PostCard;
