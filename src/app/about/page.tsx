import Hero from "@/components/Hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "기범 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          좋은 개발자
          <br />웹을 만들고 있음{" "}
        </p>
        <h2 className={TITLE_CLASS}>Carrer</h2>
        <p>경력은 없음</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>리액트, 노드, 넥스트, 깃, 몽고디비</p>
      </section>
    </>
  );
};

export default AboutPage;
