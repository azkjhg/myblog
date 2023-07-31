import React from "react";
import PostGrid from "./PostGrid";
import { getFeaturedPosts } from "@/service/post";

const FeaturePosts = async () => {
  //1. 모든 포스트 데이터를 읽어옴
  const posts = await getFeaturedPosts();
  //2. 그후 받아온 데이터를 프롭으로 전달함.
  // posts 담기까지 시간이 걸리기 때문에 아래에 posts에는 빈 값이 들어가 있고, 그걸 기다려야 하기 때문에 await을 써야 하는 것.
  return (
    <section className="my-4">
      <p className="text-2xl font-bold my-2">Feature Posts</p>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturePosts;
