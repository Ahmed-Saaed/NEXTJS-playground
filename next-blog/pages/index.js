import React from 'react';
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import {getFeaturedPosts} from '../lib/posts-util';
import Head from 'next/head';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>weclome to my blog</title>
        <meta name='description' content='i post about programming staff' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
