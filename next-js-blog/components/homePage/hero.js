import React from "react";
import Image from "next/image";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.image}>
        <Image src="/images/site/dummy_img.jpg" alt="이미지" width={300} height={300} />
      </div>
      <h1>Hello world</h1>
      <p>Next.js로 만든 블로그</p>
    </section>
  );
}
