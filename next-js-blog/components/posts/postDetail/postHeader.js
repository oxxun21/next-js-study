import React from "react";
import Image from "next/image";
import s from "./postHeader.module.css";

export default function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={s.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}
