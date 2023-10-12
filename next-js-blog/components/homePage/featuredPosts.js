import React from "react";
import s from "./featuredPosts.module.css";
import PostsGrid from "../posts/postsGrid";

export default function FeaturedPosts(props) {
  return (
    <section className={s.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
