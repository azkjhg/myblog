import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean; // 피쳐 된 녀석들.
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf8")
    .then<Post[]>((data) => {
      return JSON.parse(data);
    })
    .then((posts) =>
      posts.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      })
    );
});

// export const getAllPosts = async () :Promise<Post[]> => {
//     const filePath = path.join(process.cwd(), 'data', 'posts.json')
//     const readFile끝 = <string> await <Promise<string>>readFile(filePath, 'utf8')
//     console.log(readFile끝);

//     const jasonParse끝 = <Post[]>JSON.parse(readFile끝)
//     const sort끝 = jasonParse끝.sort((a,b) => a.date > b.date ? 1 : -1)
//     return sort끝
//     }

export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  // 파일 목록 다 가져왔는데, fileName(slug)와 같다면 그걸 반환.
  if (!post) throw new Error(`Post not found: ${fileName}`);
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf8");

  return { ...post, content, next, prev }; // 메타데이터 = Post, content = 본문내용(string)
};
