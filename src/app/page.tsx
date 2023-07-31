import CarouselPosts from "@/components/CarouselPosts";
import FeaturePosts from "@/components/FeaturePosts";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <section className="m-4">
      <Hero />
      {/* @ts-expect-error Async Server Component 에러 발생해서 이거 붙여줘야함.*/}
      <FeaturePosts />
      {/* @ts-expect-error Async Server Component*/}
      <CarouselPosts />
    </section>
  );
}
