import React from "react";
import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

export default function AllPostPage(props) {
  return (
    <>
      <Head>
        <title>All Post</title>
        <meta name="description" content="프로그래밍에 관련된 튜토리얼 및 게시글 목록" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
