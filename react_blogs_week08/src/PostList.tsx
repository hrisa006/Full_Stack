import React, { useMemo } from 'react'
import { Post, PostStatus } from './post-model'
import PostItem from './PostItem'
import { PostFilterType } from './PostFilter';

type PostListProps = {
    posts: Post[],
    filter: postStatus | undefined;
    onDelete: (Post: Post) => void;
}

export default function PostList({Posts, filter, ...rest}: PostListProps) {
  const visiblePosts = useMemo(
    () => ((tds: Post[] , fltr: PostFilterType) => Posts.filter(td => !filter || filter === td.status)),
    [posts, filter]
  );
  return (
    <div>{
      visiblePosts(Posts, filter).map((td, index) => (<PostItem key={td.id} Post={td} index={index + 1} {...rest} />))}</div>
  )
}