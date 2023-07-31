import { getAllPosts } from "@/service/post";
import FilterablePost from "@/components/FilterablePost";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "풀스택 관련 블로그 글",
};

const PostPage = async () => {
  const posts = await getAllPosts();

  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePost posts={posts} categories={categories} />;
};

export default PostPage;
