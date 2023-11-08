import React from 'react';
import classes from './featuredPost.module.css';
import PostGrid from '../posts/post-grid';

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
