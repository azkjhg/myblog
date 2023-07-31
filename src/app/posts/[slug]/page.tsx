import React from "react";
import Image from "next/image";
import PostContent from "@/components/PostContent";
import { getFeaturedPosts, getPostData } from "@/service/post";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

const PostPage = async ({ params: { slug } }: Props) => {
  // 전달된 슬러그에 해당하는 포스트 데이터를 읽어옴.
  // 그 데이터를 마크다운 뷰어에 표기하면 됨.
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 ">
      <Image
        className="w-full max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow=md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}

export default PostPage;
