import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./postItem.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={s.post}>
      <Link href={linkPath}>
        <div className={s.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
        </div>
        <div className={s.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
