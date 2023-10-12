import React from "react";
import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/featuredPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="프로그래밍 및 개발" />
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
