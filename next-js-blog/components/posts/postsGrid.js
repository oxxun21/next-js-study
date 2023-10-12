import React from "react";
import s from "./postsGrid.module.css";
import PostItem from "./postItem";

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={s.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
