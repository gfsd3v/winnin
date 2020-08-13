import React from "react";
import LoadMoreButton from "./styled";

const LoadMore = ({onClick}) => {
  return <LoadMoreButton onClick={onClick}>+ Veja mais</LoadMoreButton>;
};

export default LoadMore;
