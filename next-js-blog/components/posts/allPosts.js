import React from "react";
import s from "./allPosts.module.css";
import PostsGrid from "./postsGrid";

export default function AllPosts(props) {
  return (
    <section className={s.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
