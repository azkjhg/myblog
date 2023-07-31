import { Post } from "@/service/post";
import React from "react";
import PostCard from "./PostCard";

const PostGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <li key={post.path}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostGrid;
