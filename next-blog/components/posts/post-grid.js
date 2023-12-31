import React from 'react';
import PostItem from './post-Item';
import classes from './posts-grid.module.css';

function PostGrid(props) {
  const {posts} = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} posts={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
