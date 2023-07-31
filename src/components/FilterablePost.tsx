"use client";

import React, { useState } from "react";
import { Post } from "@/service/post";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";
const FilterablePost = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((posts) => posts.category === selected);
  return (
    <section className="flex m-4">
      <PostGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
    </section>
  );
};

export default FilterablePost;
