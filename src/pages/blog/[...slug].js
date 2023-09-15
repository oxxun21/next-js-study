import { useRouter } from "next/router";
import React from "react";

export default function BlogPosts() {
  const route = useRouter();

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
